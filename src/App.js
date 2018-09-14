import React, { Component } from 'react';

import BookList from './containers/booklist';
import ActiveBook from './containers/activeBook';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BookList />
          <ActiveBook />
      </div>
    );
  }
}

export default App;
