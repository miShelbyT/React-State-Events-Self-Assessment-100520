import React from 'react';
import './App.css';
import Image from './Components/Image'
import yesNo from './objects'

function App() {
  return <>
  <h1>You Can Do This!</h1>;
  <Image no={yesNo.no["no-image"]}/>
  </>
}

export default App;
