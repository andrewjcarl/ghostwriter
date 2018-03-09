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
      apiKey: "AIzaSyBAud0XGzC-z9gGwBj6PuKlyji0Tmq66hQ",
      authDomain: "ghostwriterdb-ca2f1.firebaseapp.com",
      databaseURL: "https://ghostwriterdb-ca2f1.firebaseio.com",
      projectId: "ghostwriterdb-ca2f1",
      storageBucket: "ghostwriterdb-ca2f1.appspot.com",
      messagingSenderId: "471768156194"
    };
    firebase.initializeApp(config);

    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    let postsRef = firebase.database().ref('posts');
    let _this = this;

    postsRef.on('value', function(snapshot) {
      
      // Build array this way so we can pass firebase object key also
      let items = [];
      snapshot.forEach((child) => {
        items.push({
          username: child.val().username,
          message: child.val().message,
          votevalue: child.val().votevalue,
          _key:child.key
        });
      });
      
      var result = snapshot.val() == null ? [] : items;
      _this.setState({
        posts: result
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <AddPostModal 
          isOpen={this.state.showModal}
          db={firebase} />
        <PostFeed 
          posts={this.state.posts}
          db={firebase} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
