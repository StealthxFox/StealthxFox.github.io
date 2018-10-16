import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import {HomePage} from './HomePage';
import {About} from './About';
import {Partners} from './Partners';
import Workshops from './Workshops';

class App extends Component {
  render() {
    var x="hello"
    console.log('start')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
    console.log(x)
    return (
    <Router>
      <div >            
          <Route exact path= {process.env.PUBLIC_URL+'/'} component={HomePage} />
          <Route path="/About" component={About} />
          <Route path="/Partners" component={Partners} />
          <Route path="/Workshops" component={Workshops} />

      </div>
    </Router>
    )
  }
}

export default App