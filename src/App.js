import React from 'react';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'

function App() {
const handleClick = () => {
  console.log('CLICK')
}

  return (
    <div className="App">
        <Header />
        <Card id={1} clickCount={handleClick}/>
    </div>
  );
}

export default App;
