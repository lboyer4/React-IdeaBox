import React from 'react';
import '../styles/_Card.scss';

function Card(props) {

function handleClick() {
	props.deleteIdea(props.id)
}

		return (
			<article>
				<h2>{props.title}</h2>
				<p>{props.body}</p>
				<button className="delete-btn" onClick={handleClick}>X</button>
			</article>
		)
	}


export default Card;