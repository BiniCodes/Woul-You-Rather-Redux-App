import React, {Component} from 'react';
import {Provider} from 'react-redux'
import { createStore } from "redux";
import reducers from "./reducers"
import './App.css';

class App extends Component{

  render(){
    return (
      <Provider store={createStore(reducers)}>
        <div>HI!</div>
      </Provider>
    );
  }
}

export default App;
