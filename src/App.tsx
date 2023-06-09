import React from 'react'
import Nav from './components/nav/nav'
import NavComp from './components/navcomp/navcomp'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import About from './components/views/about/about'
import Contact from './components/views/contact/contact'
import Footer from './components/footer/footer'
import Work from './components/views/work/work'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav>
          <NavComp exact destination='about' />
          <NavComp destination='work' />
          <NavComp destination='contact' />
        </Nav>
        <div id='main'>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work' element={<Work />} />
            <Route path='*' element={<Navigate to="/about" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
