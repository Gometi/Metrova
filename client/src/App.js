import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Brand from './components/Brand';
import { Switch, Route } from "react-router-dom";
import jaegerAnalog from "./watchList/jaeger/jaegerAnalog";
import jaegerDigital from './watchList/jaeger/jaegerDigital';
import milleAnalog from './watchList/mille/milleAnalog';
import milleDigital from './watchList/mille/milleDigital';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/brand/jaeger-alpha-analog" component={()=>(<Brand  brand={jaegerAnalog}/>)}/>
          <Route path="/brand/jaeger-alpha-digital" component={() => (<Brand brand={jaegerDigital} />)} />
          <Route path="/brand/mille-deluxe-analog" component={() => (<Brand brand={milleAnalog} />)} />
          <Route path="/brand/mille-deluxe-digital" component={() => (<Brand brand={milleDigital} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
