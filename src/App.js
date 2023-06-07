import './App.css';
import React ,{Component} from 'react'
import NavBar from './components/NavBar'
import NewItems from './components/NewsItems'

export default class App extends Component {
  render() {
    document.body.style.backgroundColor='black'
    return (
      <>
        <NavBar />
        <NewItems />
      </>
    )
  }
}
