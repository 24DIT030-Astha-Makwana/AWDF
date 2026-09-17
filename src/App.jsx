// import { Routes, Route } from 'react-router-dom'
// import './App.css'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Navbar from './components/navbar'
// import Projects from './pages/projects'
// import Contact from './pages/contact'
// import Home from './pages/home'
// import RepoList from './components/RepoList'
// import ErrorMessage from './components/ErrorMessage'

// function App() {
//   return (
//     <div className="portfolio-shell">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<><Header /><Home /></>} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App
 import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Home from './pages/home'
import ErrorMessage from './components/ErrorMessage'

function App() {
  // Dark/Light mode state
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'portfolio-shell dark' : 'portfolio-shell light'}>
      
      <Navbar />

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
      >
        {darkMode ? ' Light Mode' : ' Dark Mode'}
      </button>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        {/* 404 - Unknown Routes */}
        <Route path="*" element={<ErrorMessage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App