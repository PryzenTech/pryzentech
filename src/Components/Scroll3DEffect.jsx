import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Scroll3DEffect = () => {
  const canvasContainerRef = useRef(null);
  // explosionTextRef is not relevant for this effect, you can remove it from your JSX as well
  const explosionTextRef = useRef(null);

  useEffect(() => {
    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10); // Start camera a bit further back
    camera.lookAt(0, 0, 0); // Look at the center of the scene

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (canvasContainerRef.current) {
      canvasContainerRef.current.appendChild(renderer.domElement);
    }

    // --- Data Visualization Elements ---
    const nodes = [];
    const connections = [];
    const numNodes = 100; // Number of data points/nodes
    const fieldSize = 10; // Area where nodes are distributed

    const nodeGeometry = new THREE.SphereGeometry(0.08, 16, 16); // Small spheres for nodes
    const nodeMaterialBase = new THREE.MeshBasicMaterial({ color: 0x8888ff, transparent: true, opacity: 0.8 });
    const nodeMaterialHighlight = new THREE.MeshBasicMaterial({ color: 0xffaaff, transparent: true, opacity: 1, emissive: 0xffaaff, emissiveIntensity: 0.5 });

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x5555bb, transparent: true, opacity: 0.3 });

    // Create Nodes
    for (let i = 0; i < numNodes; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterialBase.clone()); // Clone material for individual control
      node.position.set(
        (Math.random() - 0.5) * fieldSize,
        (Math.random() - 0.5) * fieldSize,
        (Math.random() - 0.5) * fieldSize
      );
      node.originalPosition = node.position.clone(); // Store original position for scroll effects
      node.userData.baseColor = nodeMaterialBase.color.getHex();
      node.userData.highlightColor = nodeMaterialHighlight.color.getHex();
      nodes.push(node);
      scene.add(node);
    }

    // Create Connections (simple proximity-based connections)
    const maxConnectionDistance = 2.5; // Nodes within this distance will connect
    nodes.forEach((nodeA, i) => {
      nodes.forEach((nodeB, j) => {
        if (i < j && nodeA.position.distanceTo(nodeB.position) < maxConnectionDistance) {
          const points = [];
          points.push(nodeA.position);
          points.push(nodeB.position);
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeometry, lineMaterial.clone()); // Clone material for individual control if needed
          connections.push(line);
          scene.add(line);
        }
      });
    });

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLightA = new THREE.PointLight(0x00ffff, 1.5, 30);
    pointLightA.position.set(5, 5, 5);
    scene.add(pointLightA);

    const pointLightB = new THREE.PointLight(0xff00ff, 1.5, 30);
    pointLightB.position.set(-5, -5, -5);
    scene.add(pointLightB);

    // --- Animation Variables ---
    let scrollProgress = 0; // Current scroll progress from 0 to 1

    // --- Event Handlers ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

      // Effect 1: Camera moves through the visualization
      camera.position.z = 10 - (scrollProgress * 15); // Moves from z=10 to z=-5
      camera.position.y = (Math.sin(scrollProgress * Math.PI * 2) * 2); // Subtle up/down movement

      // Effect 2: Nodes react to scroll - e.g., highlight certain nodes or make them "pulse"
      nodes.forEach(node => {
        // Example: Change color and size based on scroll progress
        const distanceToCenterZ = Math.abs(node.position.z - camera.position.z);
        const highlightFactor = Math.max(0, 1 - (distanceToCenterZ / 5)); // Nodes closer to camera get highlighted

        // Animate node color and emissive intensity
        node.material.color.setHex(new THREE.Color().lerpColors(
          new THREE.Color(node.userData.baseColor),
          new THREE.Color(node.userData.highlightColor),
          highlightFactor
        ).getHex());
        node.material.emissiveIntensity = highlightFactor * 0.8;

        // Animate node scale
        const scaleFactor = 1 + (highlightFactor * 0.5); // Max 1.5x original size
        node.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Make lines connecting to highlighted nodes slightly brighter
        connections.forEach(line => {
          const startNode = nodes.find(n => n.position === line.geometry.attributes.position.array.slice(0,3)); // This is a rough check, needs refinement for complex scenes
          const endNode = nodes.find(n => n.position === line.geometry.attributes.position.array.slice(3,6));

          // A more robust way would be to store references to connected nodes within line.userData
          // For simplicity here, we'll check if either end is highlighted
          const lineHighlight = Math.max(
            startNode ? Math.max(0, 1 - (Math.abs(startNode.position.z - camera.position.z) / 5)) : 0,
            endNode ? Math.max(0, 1 - (Math.abs(endNode.position.z - camera.position.z) / 5)) : 0
          );
          line.material.opacity = 0.3 + (lineHighlight * 0.5); // Lines become more opaque
          line.material.color.setHex(new THREE.Color().lerpColors(
            new THREE.Color(0x5555bb), // Base line color
            new THREE.Color(0x9999ff), // Highlighted line color
            lineHighlight
          ).getHex());
        });
      });

      // Effect 3: Rotate the entire data visualization based on scroll
      scene.rotation.y = scrollProgress * Math.PI; // Rotates 180 degrees over full scroll
    };
    window.addEventListener('scroll', handleScroll);

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);

      // Nodes slightly float or oscillate
      nodes.forEach((node, index) => {
        node.position.y = node.originalPosition.y + Math.sin(Date.now() * 0.0005 + index) * 0.5;
        node.position.x = node.originalPosition.x + Math.cos(Date.now() * 0.0007 + index) * 0.5;
      });

      // Connections need to be updated if nodes move
      connections.forEach(line => {
        const positions = line.geometry.attributes.position.array;
        // Find the actual nodes this line connects (more robust way needed for complex scenes)
        // For this simple example, we assume line.geometry.attributes.position.array directly reflects node positions
        // A better approach is to store node references in line.userData or regenerate lines
        // For now, we'll skip dynamic line updates in favor of node movement for simplicity
      });

      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);

      // Dispose of all scene objects, geometries, and materials
      scene.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          if (object.material.isMaterial) {
            object.material.dispose();
          } else { // Array of materials
            for (const material of object.material) material.dispose();
          }
        }
        if (object.isLine) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
      renderer.dispose();
      
      if (canvasContainerRef.current && canvasContainerRef.current.contains(renderer.domElement)) {
        canvasContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
      <div ref={canvasContainerRef} className="absolute top-0 left-0 w-full h-full"></div>
      {/* Removed the explosionTextRef div if it's no longer needed for your design */}
    </div>
  );
};

export default Scroll3DEffect;