import React, { Component } from 'react';
import '../styles/_App.scss';
import Header from './Header.js';
import Form from './Form.js';
import CardContainer from  './CardContainer.js';  

class App extends Component {
  constructor() {
    super() 
    this.state = {
      searching: false,
      allIdeas: [],
      filteredIdeas: []
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

  createNewIdea = (title, body, id) => {
    const newIdea = [{title: title,
        body: body, id: Date.now()}]
    if (this.state.allIdeas === null) {
      this.setState({ allIdeas: newIdea })
    } else {
      this.setState({
        allIdeas: this.state.allIdeas.concat(newIdea)
      })
    }
  }

  deleteIdea = (id) => {

    let indexToDelete = this.state.allIdeas.findIndex(idea => {
      return idea.id === id
    })
    this.state.allIdeas.splice(indexToDelete, 1)
    this.setState({allIdeas: this.state.allIdeas})
  }

  filterIdeas = (query) => {
    let filteredIdeas = this.state.allIdeas.filter(idea => {
      return idea.title === query;
    })
    if (query) {
      this.setState({
        filteredIdeas: filteredIdeas,
        searching: true 
      })
    } else {
      this.setState({ searching: false })
    }
  }

  render () {
    let cardContainer;
    if (this.state.searching) {
      cardContainer = <CardContainer 
        ideas={this.state.filteredIdeas}
        deleteIdea={this.deleteIdea} 
      />
    } else {
      cardContainer = <CardContainer 
        ideas={this.state.allIdeas}
        deleteIdea={this.deleteIdea} 
      />
    }
    return (
      <div>
        <Header filterIdeas={this.filterIdeas}/>
        <Form createNewIdea={this.createNewIdea}/>
        {cardContainer}
      </div>
    )
  }
}

export default App;