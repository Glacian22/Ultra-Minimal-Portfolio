import React from 'react'
import Nav from './components/nav/nav'
import NavComp from './components/navcomp/navcomp'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import About from './components/views/about/about'
// import Portfolio from './components/views/portfolio/portfolio'
// import Tech from './components/views/technology/tech'
import Contact from './components/views/contact/contact'
import Footer from './components/footer/footer'
import Content from './components/content/content'
import NextBtn from './components/nextBtn/nextBtn'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav>
          <NavComp exact destination='about' />
          {/* <NavComp destination='portfolio' /> */}
          <NavComp destination='contact' />
        </Nav>
        <Content>
          <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Navigate to="/about" />} />
          </Routes>
        </Content>
        {/* <NextBtn/> */}
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
