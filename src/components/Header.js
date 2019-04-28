import React, { Component } from 'react';
import '../styles/_Header.scss';

class Header extends Component {
	constructor() {
		super() 
		this.state = {
			searchOn: false
		}
	}

	render() {
		return (
			<header> 
    <h1> <span className="color-ideabox">ideabox</span>triples
    </h1>
				<nav>
					<input className="search-bar" type="text" name="search"
    placeholder="Search">
    			</input>
    		</nav>
			</header>
		)
	}
}

export default Header