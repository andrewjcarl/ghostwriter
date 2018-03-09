import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props)
    var config = {
      apiKey: "AIzaSyBAud0XGzC-z9gGwBj6PuKlyji0Tmq66hQ",
      authDomain: "ghostwriterdb-ca2f1.firebaseapp.com",
      databaseURL: "https://ghostwriterdb-ca2f1.firebaseio.com",
      projectId: "ghostwriterdb-ca2f1",
      storageBucket: "ghostwriterdb-ca2f1.appspot.com",
      messagingSenderId: "471768156194"
    };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
