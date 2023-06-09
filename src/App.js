// import './App.css';
import React ,{Component} from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
export default class App extends Component {
  render() {
    document.body.style.backgroundColor='black'
    return (
      <>
        <NavBar />
        <News />
      </>
    )
  }
}