import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Projects />
      <Experience/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
