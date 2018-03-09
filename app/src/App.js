import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import MessageBox from './components/messageBox';

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
      <div className="container">
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
    );
  }
}

export default App;
