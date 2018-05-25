import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    let greeting = 'This is a custom greeting!';
    const appClassName = 'App';
    if (true) {
      greeting = 'Reassigning a custom greeting within a condition!';
    }
    const listItem = (<li>This is a list item</li>);

    return (
      <div className={appClassName}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{greeting}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. {2 + 2}
        </p>
        {listItem}
      </div>
    );
  }

}

export default App;
