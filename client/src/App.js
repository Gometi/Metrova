import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
