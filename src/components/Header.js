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
    <h1> <span class="color-ideabox">ideabox</span>triples
    </h1>
				<nav>
					<input class="search-bar" type="text" name="search"
    placeholder="Search">
    			</input>
    		</nav>
			</header>
		)
	}
}

export default Header