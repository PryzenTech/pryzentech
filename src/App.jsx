import React from 'react'
import {BrowserRouter,Routes,Route, useNavigate ,} from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import {Navigate} from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
    <div className='text-4xl'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App