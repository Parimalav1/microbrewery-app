import React, { useState, useEffect } from 'react';
// import { Switch, router, link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import BeerList from './BeerList';
import BeerCard from './BeerCard'

function App() {
  const [beers, setBeers] = useState([]);
  // const [value, setValue] = useState('dog')

  useEffect(() => {
    const getBeers = () => {
      axios.get('https://api.openbrewerydb.org/breweries')
        .then(res => {
          setBeers(res.data)
          console.log(res.data);
        })
        .catch(err => {
          console.log('Error')
        })
    }
    getBeers();
  }, [])


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BeerList listofBeers={beers} />
      <BeerCard />
    </div>
  );
}

export default App;
