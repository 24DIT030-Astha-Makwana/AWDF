import { useState } from 'react'
import { Routes,Route } from  'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Navbar from './components/navbar'
import home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<home />} ></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />} ></Route> 
      </Routes>
      <Header />
      <About />
      <Skills skillList={['JavaScript', 'React', 'Node.js']} />
      <Footer />
    
     
    </>
  )
}

export default App
