import React, { Component } from 'react';
import '../styles/_App.scss';
import Header from './Header.js';
import FormHolder from './FormHolder.js';
import CardContainer from  './CardContainer.js';  

class App extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Header />
        <FormHolder />
        <CardContainer />
      </div>
      )
  }
}

export default App;