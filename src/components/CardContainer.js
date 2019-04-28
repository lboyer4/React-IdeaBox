import React from 'react';
import Card from './Card.js';
import '../styles/_CardContainer.scss';

function CardContainer(props) {
		return (
			<main className="card-container">
				{props.ideas.map((idea) => {
					return (<Card key={idea.id} id={idea.id} title={idea.title} body={idea.body}
						deleteIdea={props.deleteIdea}
					/>)	
				})}
				
			</main>
		)
	}


export default CardContainer;