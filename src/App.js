import React, { Component } from 'react';
import Eval from "./Eval";
import Score from "./Score";
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {
  	correct: 0,
    total: 0,
  }

  handleAns = checkAns => {
  	if (checkAns) {
      this.setState(current => ({
        correct: current.correct + 1,
      }));
    }
    this.setState(current => ({
      total: current.total + 1,
    }));
  };  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Eval handleAns={this.handleAns} />
          <Score c={this.state.correct} q={this.state.total} />
        </div>
      </div>
    );
  }
}

export default App;
