import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div id="home"><Homepage /></div>
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="skill"><Skill /></div>
      <div id="footer"><Footer /></div>
    </Router>
  )
}

export default App