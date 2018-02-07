import React, { Component } from 'react';
import '../css/App.css';
import NoteList from './noteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Troy's Note App</h1>
        </header>
        <NoteList/>
      </div>
    );
  }
}

export default App;
