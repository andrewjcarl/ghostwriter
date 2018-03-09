import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PostFeed from './components/PostFeed';

class App extends Component {
  constructor () {
    super();
    this.state = {
        posts: [
          {          
            username: "bob",
            message: "test"
          },
          {          
            username: "iguana",
            message: "pajama"
          }
        ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <PostFeed posts={this.state.posts} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
