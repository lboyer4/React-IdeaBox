import React, { Component } from 'react';
import Card from './Card.js';
import '../styles/_CardContainer.scss';

function CardContainer(props) {
	console.log(props)
		return (
			<main>
				{props.ideas.map(idea => {
					return (<Card title={idea.title} body={idea.body}
					/>)	
				})}
				
			</main>
		)
	}


export default CardContainer;