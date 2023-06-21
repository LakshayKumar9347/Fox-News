import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import About from './components/About'
import Credits from './components/Credits'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    // document.body.style.backgroundImage = "";
    document.body.style.fontFamily = 'Montserrat'
    document.body.style.backgroundColor='black'
    return (
      <>
        <NavBar getId={this.captureCategory} />
        <Routes>
          <Route exact path='/' element={<News key="" category="" /> } />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/credits' element={<Credits />} />
          <Route exact path='/contact' element={<Contact />} />
          {/* //!adding routes for the Category */}
          <Route exact  path='/business' element={<News key="business"  category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" category="entertainment" />} />
          <Route exact path='/general' element={<News key="general" category="general" />} />
          <Route exact path='/health' element={<News key="health" category="health" />} />
          <Route exact path='/science' element={<News key="science" category="science" />} />
          <Route exact path='/sports' element={<News key="sports" category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" category="technology" />} />
        </Routes>
      </>
    )
  }
}