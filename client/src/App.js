import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Brand from './components/Brand';
import { Switch, Route } from "react-router-dom";
import jaegerAnalog from "./watchList/jaeger/jaegerAnalog";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/brand/jaeger-alpha-analog" component={(props)=>(<Brand name={{image: "this is image"}} items={jaegerAnalog}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
