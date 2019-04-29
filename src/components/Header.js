import React, { Component } from 'react';
import '../styles/_Header.scss';

class Header extends Component {
	constructor() {
		super() 
		this.state = {
			searchOn: false
		}
	}

	changeHandler = (e) => {
		this.props.filterIdeas(e.target.value)
	}

	render() {
		return (
			<header> 
    <h1> <span className="color-ideabox">ideabox</span>triples
    </h1>
				<nav>
					<input onChange={this.changeHandler}className="search-bar" type="text" name="search"
    placeholder="Search">
    			</input>
    		</nav>
			</header>
		)
	}
}

export default Header