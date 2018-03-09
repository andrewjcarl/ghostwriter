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
      posts: [],
      showModal: false
    };

    this.toggleAddPostModal = this.toggleAddPostModal.bind(this);
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

  toggleAddPostModal(value) {
    this.setState({
      showModal: value
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header toggleAddPostModal={this.toggleAddPostModal}/>
        <AddPostModal 
          modalIsOpen={this.state.showModal}
          db={firebase}
          toggleAddPostModal={this.toggleAddPostModal} />
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
