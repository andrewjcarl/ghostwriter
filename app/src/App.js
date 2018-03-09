import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Header from './components/header';
import PostFeed from './components/PostFeed';
import AddPostModal from './components/AddPostModal';

class App extends Component {
  constructor (props) {
    super(props)

    var config = {
      apiKey: "AIzaSyC3Y8-stnJGcGOnCV79MG2A7lhpjfofaes",
      authDomain: "ghostwriter-197523.firebaseapp.com",
      databaseURL: "https://ghostwriter-197523.firebaseio.com",
      projectId: "ghostwriter-197523",
      storageBucket: "ghostwriter-197523.appspot.com",
      messagingSenderId: "888773227754"
    };
    firebase.initializeApp(config);

    this.state = {
      // Firebase junk comes in here
      posts: [
        {         
          id: 1, 
          username: "bob",
          message: "test",
          votevalue: 0
        },
        {  
          id: 2,        
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
          db={firebase} />
        <PostFeed posts={this.state.posts} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
