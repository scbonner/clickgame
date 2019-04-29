import React from 'react';
import './App.css';
import Heading from "./Heading";
import Card from "./Card";

function App() {
const handleClick = () => {
  console.log('CLICK')
}

  return (
    <div className="App">
        <Heading />
        <Card id={1} clickCount={handleClick}/>
    </div>
  );
}

export default App;
