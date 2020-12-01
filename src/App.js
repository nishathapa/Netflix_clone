import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'
function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Trending now" fetchUrl={requests.fetchTrending } />

    </div>
  );
}

export default App;
