import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ScrollExplosionEffect = () => {
  const canvasContainerRef = useRef(null);
  const explosionTextRef = useRef(null);
  const scrollPositionRef = useRef(null);
  
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainerRef.current.appendChild(renderer.domElement);
    
    // Create the central sphere (bubble)
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x4d76ff,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x1a53ff,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Create particles for explosion effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 4;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xffffff,
      transparent: true,
      opacity: 0
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x4d76ff, 1.5, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xff00c8, 1.5, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    
    // Animation variables
    let scrollProgress = 0;
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Scroll listener for explosion effect
    const handleScroll = () => {
      scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPositionRef.current) {
        scrollPositionRef.current.textContent = Math.floor(window.scrollY);
      }
      
      // Scale sphere based on scroll
      const scale = 1 + scrollProgress * 10;
      sphere.scale.set(scale, scale, scale);
      
      // Control sphere opacity
      sphere.material.opacity = 0.8 - (scrollProgress * 0.8);
      
      // Control particle opacity and size
      particles.material.opacity = scrollProgress * 2;
      particles.material.size = 0.03 + scrollProgress * 0.1;
      
      // Move particles away from center based on scroll
      const positions = particlesGeometry.attributes.position.array;
      for(let i = 0; i < positions.length; i += 3) {
        const originalX = (Math.random() - 0.5) * 4;
        const originalY = (Math.random() - 0.5) * 4;
        const originalZ = (Math.random() - 0.5) * 4;
        
        positions[i] = originalX + (originalX * scrollProgress * 10);
        positions[i+1] = originalY + (originalY * scrollProgress * 10);
        positions[i+2] = originalZ + (originalZ * scrollProgress * 10);
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      // Show explosion text at peak scroll
      if (explosionTextRef.current) {
        if (scrollProgress > 0.3) {
          explosionTextRef.current.style.opacity = 1;
          explosionTextRef.current.style.transform = `translate(-50%, -50%) scale(${1 + (scrollProgress - 0.3) * 3})`;
          explosionTextRef.current.style.filter = `blur(${(scrollProgress - 0.3) * 10}px)`;
        } else {
          explosionTextRef.current.style.opacity = 0;
          explosionTextRef.current.style.transform = `translate(-50%, -50%) scale(0)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Animate sphere rotation
    const animate = () => {
      requestAnimationFrame(animate);
      
      sphere.rotation.x += 0.003;
      sphere.rotation.y += 0.005;
      
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    };
    animate();
    
    // GSAP animations for content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
    
    // Initial animation for header
    gsap.from('.header', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out"
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
      if (canvasContainerRef.current && canvasContainerRef.current.contains(renderer.domElement)) {
        canvasContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  // // Content card component
  // const Card = ({ icon, title, children }) => (
  //   <div className="card">
  //     <div className="icon">{icon}</div>
  //     <h3>{title}</h3>
  //     <p>{children}</p>
  //   </div>
  // );
  
  return (
    <div className="app">
      <div ref={canvasContainerRef} className="canvas-container"></div>
      <div ref={explosionTextRef} className="explosion-text">BOOM!</div>
      
      {/* <div className="container">
        <header className="header">
          <h1>Scroll Explosion Effect</h1>
          <p className="subtitle">
            Scroll down to witness a spectacular 3D bubble explosion powered by Three.js and GSAP
          </p>
          
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="scroll-text">Scroll to explode</div>
          </div>
        </header>
        
        <div className="content-section" id="section1">
          <h2 className="section-title">The Science of Explosions</h2>
          <p>
            Explosions are rapid expansions in volume associated with an extremely vigorous outward release of energy. 
            This demo simulates an explosion through particle physics and 3D rendering.
          </p>
          
          <div className="content-grid">
            <Card icon="🔥" title="Energy Release">
              Explosions release stored energy rapidly, creating a shock wave that moves faster than the speed of sound.
            </Card>
            
            <Card icon="⚛️" title="Particle Physics">
              Each particle in the explosion follows physics-based behaviors with velocity, gravity, and decay properties.
            </Card>
            
            <Card icon="💥" title="Visual Impact">
              The visual representation creates an immersive experience that demonstrates the power of explosions.
            </Card>
          </div>
        </div>
        
        <div className="content-section" id="section2">
          <h2 className="section-title">Technical Implementation</h2>
          <p>
            This effect is created using Three.js for 3D rendering and GSAP with ScrollTrigger for scroll-based animations.
          </p>
          
          <div className="content-grid">
            <Card icon="🔄" title="Three.js">
              Powerful WebGL library for creating and animating 3D computer graphics in a web browser.
            </Card>
            
            <Card icon="📜" title="ScrollTrigger">
              GSAP plugin that triggers animations when specific elements scroll into view.
            </Card>
            
            <Card icon="✨" title="Particle System">
              A system that manages thousands of individual particles with unique properties and behaviors.
            </Card>
          </div>
        </div>
        
        <div className="content-section" id="section3">
          <h2 className="section-title">Creative Applications</h2>
          <p>
            This technique can be used to create engaging user experiences on websites and applications.
          </p>
          
          <div className="content-grid">
            <Card icon="🎮" title="Gaming">
              Create immersive explosion effects for browser-based games and interactive experiences.
            </Card>
            
            <Card icon="🎥" title="Storytelling">
              Enhance narrative websites with dramatic visual effects that respond to user scrolling.
            </Card>
            
            <Card icon="📱" title="Product Launches">
              Make product reveal moments memorable with explosive animations that capture attention.
            </Card>
          </div>
        </div>
      </div> */}
    
    </div>
  );
};

// CSS Styles
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .app {
    min-height: 200vh;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: #fff;
    overflow-x: hidden;
    perspective: 1000px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    position: relative;
    z-index: 10;
  }
  
  header {
    text-align: center;
    padding: 80px 0;
  }
  
  h1 {
    font-size: 4.5rem;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    text-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  .subtitle {
    font-size: 1.5rem;
    max-width: 700px;
    margin: 0 auto 40px;
    color: #e0e0ff;
    opacity: 0.9;
  }
  
  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
  
  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid rgba(255,255,255,0.7);
    border-radius: 20px;
    margin-bottom: 10px;
    position: relative;
  }
  
  .wheel {
    width: 6px;
    height: 8px;
    background: rgba(255,255,255,0.7);
    border-radius: 3px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollAnim 1.5s infinite;
  }
  
  @keyframes scrollAnim {
    0% { top: 10px; opacity: 1; }
    100% { top: 25px; opacity: 0; }
  }
  
  .scroll-text {
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.7);
  }
  
  .content-section {
    margin: 200px auto;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    border: 1px solid rgba(255,255,255,0.1);
    transform: translateY(50px);
    opacity: 0;
  }
  
  .content-section.visible {
    transform: translateY(0);
    opacity: 1;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 25px;
    color: #ff9a9e;
    text-align: center;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }
  
  .card {
    background: rgba(255,255,255,0.03);
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.07);
  }
  
  .card:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.06);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
  
  .card h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #f6d365;
  }
  
  .card p {
    color: #d0d0ff;
    line-height: 1.6;
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #a6c1ee;
  }
  
  footer {
    text-align: center;
    padding: 60px 0 40px;
    color: rgba(255,255,255,0.6);
    font-size: 1.1rem;
  }
  
  .canvas-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }
  
  .explosion-text {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    font-size: 8rem;
    font-weight: 900;
    color: rgba(255,255,255,0.1);
    text-transform: uppercase;
    letter-spacing: 20px;
    z-index: 2;
    pointer-events: none;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #a1c4fd);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: blur(0px);
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .content-grid {
      grid-template-columns: 1fr;
    }
    
    .explosion-text {
      font-size: 4rem;
      letter-spacing: 10px;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ScrollExplosionEffect;