import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Brand from './components/Brand';
import { Switch, Route } from "react-router-dom";
import jaegerAnalog from "./watchList/jaeger/jaegerAnalog";
import jaegerDigital from './watchList/jaeger/jaegerDigital';
import milleAnalog from './watchList/mille/milleAnalog';
import milleDigital from './watchList/mille/milleDigital';
import WatchDetails from './components/WatchDetails';
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/watch_details/:name" component={(props)=>(<WatchDetails name={props.match.params.name} />)} />
          <Route path="/brand/jaeger-alpha-analog" component={()=>(<Brand  brand={jaegerAnalog}/>)}/>
          <Route path="/brand/jaeger-alpha-digital" component={() => (<Brand brand={jaegerDigital} />)} />
          <Route path="/brand/mille-deluxe-analog" component={() => (<Brand brand={milleAnalog} />)} />
          <Route path="/brand/mille-deluxe-digital" component={() => (<Brand brand={milleDigital} />)} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
