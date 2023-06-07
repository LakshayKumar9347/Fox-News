import './App.css';
import React from 'react'
import jarvis from './jarvis.mp3'

export default function App() {
  let play = new Audio({jarvis})
  play.play()
  return (
    <div>Hello I am jarvis</div>
  )
}
