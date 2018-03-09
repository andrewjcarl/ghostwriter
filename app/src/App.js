import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import Header from './components/header';
import PostFeed from './components/PostFeed';
import AddPostModal from './components/AddPostModal';
import LogIn from './components/logIn';
import getProfile from './utils/getProfile';

const config = {
  apiKey: "AIzaSyBAud0XGzC-z9gGwBj6PuKlyji0Tmq66hQ",
  authDomain: "ghostwriterdb-ca2f1.firebaseapp.com",
  databaseURL: "https://ghostwriterdb-ca2f1.firebaseio.com",
  projectId: "ghostwriterdb-ca2f1",
  storageBucket: "ghostwriterdb-ca2f1.appspot.com",
  messagingSenderId: "471768156194"
};

class App extends Component {
  constructor (props) {
    super(props)

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

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth; 

    //  TODO
    //  need to integrate with auth0 api to get user details
    //  and pass to firebase on load
    if (isAuthenticated()) {
      //console.log(getProfile());
    }

    return (
      <div className="App">
        <Header 
          isAuthenticated={isAuthenticated} 
          logOut={this.logout}
          db={firebase}
        />
        {
          isAuthenticated() && 
          <React.Fragment>
             <PostFeed 
              posts={this.state.posts}
              db={firebase} />
          </React.Fragment>
        }
        {
          !isAuthenticated() && (
            <LogIn 
              login={this.login}
            />
          )
        }
      </div>
    );
  };
}

export default App;
