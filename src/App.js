import React from 'react';
import Header from '../src/components/Header';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  const styles =
    'font-size: 1.25em; font-weight: bolder; padding:10px; background-color: rgba(0,0,0,0.8); color: white; border-radius:10px';
  console.log(
    `%c👨‍💻Hi, Im Vasyl Lespuch and Thanks for checking out my portfolio!`,
    styles
  );
  const styles2 =
    'font-size: 1.25em; font-weight: bolder; padding:10px; background-color: #90E0EF; border-radius:10px; opacity: 0;';
  console.log('%c🖥️My GitHub Page: https://github.com/lespuch-v', styles2);
  const styles3 =
    'font-size: 1.25em; font-weight: bolder; padding:10px; background-color: #FFBBBB; border-radius:10px; opacity: 0;';
  console.log(
    '%c😅You can contact my by Facebook: https://www.facebook.com/vasyl.lespuch.3/',
    styles3
  );
  const styles4 = `font-size: 1.25em; font-weight: bolder; padding:10px; background-color: #8BDB81; border-radius:10px;`;
  console.log(
    '%c😯Check out my Instagram page: https://www.instagram.com/vlcoding/?hl=en',
    styles4
  );

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
