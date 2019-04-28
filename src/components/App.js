import React, { Component } from 'react';
import '../styles/_App.scss';
import Header from './Header.js';
import Form from './Form.js';
import CardContainer from  './CardContainer.js';  

class App extends Component {
  constructor() {
    super() 
    this.state = {
      allIdeas: []
    }
  }

  componentDidMount = () => {
    if (this.state.allIdeas !== null) {
      this.setState({allIdeas: this.getIdeas()})
    }
  }

  getIdeas = () => {
   return JSON.parse(localStorage.getItem('ideas'))
  }

  componentDidUpdate = () => {
    this.saveIdeas()
  }

  saveIdeas = () => {
    const stringyIdeas = JSON.stringify(this.state.allIdeas)

    localStorage.setItem('ideas', stringyIdeas)
  }

  createNewIdea = (title, body) => {
    const newIdea = [{title: title,
        body: body}]
    if (this.state.allIdeas === null) {
      this.setState({ allIdeas: newIdea })
    } else {
      this.setState({
        allIdeas: this.state.allIdeas.concat(newIdea)
      })
    }
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