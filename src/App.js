import React, {useState} from "react"
import Header from '../src/components/Header'
import Introduction from './components/Introduction'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Tools from './components/Tools'
import Contacts from './components/Contacts'
import './App.css'

function App() {
  const [darkModeON, setDarkModeON] = useState(false)

  const myBody = document.getElementById('root').style.backgroundColor = darkModeON ? "#2D4263" : null



  function toggleDark(){
    setDarkModeON(prevValue => !prevValue)
  }

  return (
    <div className="App">
        <Header darkModeON={darkModeON} toggleDark={toggleDark} />
        <Introduction darkModeON={darkModeON} toggleDark={toggleDark} />
        <AboutMe darkModeON={darkModeON} toggleDark={toggleDark} />
        <Portfolio darkModeON={darkModeON} toggleDark={toggleDark} />
        <Tools darkModeON={darkModeON} toggleDark={toggleDark} />
        <Contacts darkModeON={darkModeON} toggleDark={toggleDark} />
    </div>
  )
}

export default App
