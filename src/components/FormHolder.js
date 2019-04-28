import React, { Component } from 'react';
import '../styles/_FormHolder.scss';
import Form from './Form.js';

class FormHolder extends Component {

	

	render() {
		return (
			<section className="form-holder">
				<Form />
			</section>
		)
	}
}

export default FormHolder;