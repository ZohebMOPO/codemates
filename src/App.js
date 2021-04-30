import React from 'react';
import './App.css';
import Home from './components/home.js';
import Header from './components/header.js';
import Card from './components/cards.js';

function App() {
  return (
    <div className="App">
      <Card
       name="ALENA STUDIO"
       profession= "WEB DEVELOPER"
       img="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200"/>
    </div>
  );
}

export default App;
