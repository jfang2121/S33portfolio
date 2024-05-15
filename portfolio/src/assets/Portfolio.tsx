import React from 'react';
import './Portfolio.css';

function Portfolio(){
	return(
		<div className="Portfolio">
			<h1> React </h1>
			<h2>Summary</h2>
			<p> 
				React.js is a Javascript library that allows us to make reusable
				components for our web applications. You can create a React application
				by writting the following command wherever you want your project to be:
			</p>
			<code>
				yarn create vite	
			</code>
			<h2 className="components">Components</h2>
			<h2 className="state">State</h2>
			<p>One of the things React lets us do quite easily is keep state on
			the client side. </p>
			<h2 className="properties">Properties</h2>
			<h2 className="hooks">Hooks</h2>
		</div>
	)
}

export default Portfolio;
