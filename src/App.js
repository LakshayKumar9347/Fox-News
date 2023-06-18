import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import About from './components/About'
import Credits from './components/Credits'
import Contact from './components/Contact'
import { Routes,Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    document.body.style.backgroundColor = 'rgb(133, 110, 124)'
    document.body.style.fontFamily = 'Montserrat'
    return (
      <>
        <NavBar />
       <Routes>
       <Route path='/' element={<News />} />
        <Route path='/about' element={<About />} />
        <Route path='/credits' element={<Credits />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
      </>
    )
  }
}