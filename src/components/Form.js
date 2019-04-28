import React, { Component } from 'react';
import '../styles/_Form.scss';


class Form extends Component {
	 // constructor(props) {
  //   super(props) 
  //   this.state = {
  //   }
  // }

	clickHandler = (e) => {
		let title =e.target.parentElement.querySelector('.title').value;
		let body = e.target.parentElement.querySelector('.body').value
		this.props.createNewIdea(title, body, this.props.key)
	}

	render() {
		return (
			<main className="form-holder">
				<form>
					<label htmlFor="title">Title</label>
	      		<textarea rows="2" cols="50" className="title" type="text" name="title"></textarea>
	      	<label htmlFor="body">Body</label>
	      		<textarea rows="4" cols="50" className="body" type="text" name="Body"></textarea>
	      	<button onClick={this.clickHandler} className="save-btn"type="button" name="Save">Save</button>
				</form>
			</main>
		)
	}
}

export default Form;