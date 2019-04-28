import React from 'react';
import Card from './Card.js';
import '../styles/_CardContainer.scss';

function CardContainer(props) {
		return (
			<main className="card-container">
				{props.ideas.map((idea, index) => {
					return (<Card key={index} title={idea.title} body={idea.body}
					/>)	
				})}
				
			</main>
		)
	}


export default CardContainer;