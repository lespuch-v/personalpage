import React from 'react';
import Header from '../src/components/Header';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <AboutMe />
      <Portfolio />
      <Tools />
      <Contacts />
    </div>
  );
}

export default App;
