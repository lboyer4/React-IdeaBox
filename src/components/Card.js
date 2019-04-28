import React, { Component } from 'react';
import '../styles/_Card.scss';

function Card(props) {
		return (
			<article>
				<h2>{props.title}</h2>
				<p>{props.body}</p>
			</article>
		)
	}

export default Card;