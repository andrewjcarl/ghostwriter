import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Header from './components/header';
import PostFeed from './components/PostFeed';
import AddPostModal from './components/AddPostModal';

class App extends Component {
  constructor (props) {
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
    this.state = {
        // Firebase junk comes in here
        posts: [
          {          
            username: "bob",
            message: "test",
            votevalue: 0
          },
          {          
            username: "iguana",
            message: "pajama",
            votevalue: 5
          }
        ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <AddPostModal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
        </AddPostModal>
        <PostFeed posts={this.state.posts} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
