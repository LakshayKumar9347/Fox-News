// import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
export default class App extends Component {
  render() {
    document.body.style.backgroundColor = '#534750'
    return (
      <>
        <NavBar />
        <h1 className='text-light text-center m-3'>Bumblebee:- Breaking News and Updates</h1>
        <News />
      </>
    )
  }
}