import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';

function App() {
  //BEM class naming convention
  return <div className="app">
    <Header/>
    <TinderCards/>
    <SwipeButton/>
  </div>;
}

export default App;
