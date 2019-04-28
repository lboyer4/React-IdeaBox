import React, { Component } from 'react';
import '../styles/_Form.scss';


class Form extends Component {

	

	render() {
		return (
			<form>
				<label for="title">Title</label>
      		<textarea rows="2" cols="50" class="title" type="text" name="title"></textarea>
      	<label for="body">Body</label>
      		<textarea rows="4" cols="50" class="body-style input-selector" type="text" name="Body"></textarea>
      	<button id="save-btn" class="save-btn"type="button" name="Save">Save</button>
			</form>
		)
	}
}

export default Form;