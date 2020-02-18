import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import MyPage from "./container/MyPage";

class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={MyPage} />
          
        </div>
      </Router>
    );
  }
}

export default App;

