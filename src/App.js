// import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
export default class App extends Component {
  render() {
    document.body.style.backgroundColor = 'rgb(133, 110, 124)'
    document.body.style.fontFamily = 'Montserrat'
    return (
      <>
        <NavBar />
        <News />
      </>
    )
  }
}