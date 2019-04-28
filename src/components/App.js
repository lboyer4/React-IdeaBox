import React, { Component } from 'react';
import '../styles/_App.scss';
import Header from './Header.js';
import Form from './Form.js';
import CardContainer from  './CardContainer.js';  

class App extends Component {
  constructor() {
    super() 
    this.state = {
      allIdeas: [
        {title: 'Good Morning',
        body: 'America!' }
      ]
    }
  }

  createNewIdea = (title, body) => {
    const newIdea = [{title: title,
        body: body}]
    this.setState({
      allIdeas: this.state.allIdeas.concat(newIdea)
    })
  }

  render () {
    let cardContainer = this.state.allIdeas && <CardContainer ideas={this.state.allIdeas} />
    return (
      <div>
        <Header />
        <Form createNewIdea={this.createNewIdea}/>
        {cardContainer}
      </div>
    )
  }
}

export default App;