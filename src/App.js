import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropVariable from './PropVariable.js';
import UpdateStateExample from './UpdateStateExample.js';

class ItemList extends Component {
  render() {
  let { items } = this.props;
  return items.map((k, index) => {
  return <span key={index}>{k.name}</span>;
  });
  }
  }
  class ItemListExample extends Component {
  render() {
  let items = [
  { name: "Akua" },
  { name: "Inkomie" },
  { name: "CocaQola" },
  { name: "Funta" },
  ];
  return <ItemList items={items} />;
  }
  };

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UpdateStateExample></UpdateStateExample>
          <PropVariable></PropVariable>
        </header>
      </div>
    );
  }
}

export default App;
