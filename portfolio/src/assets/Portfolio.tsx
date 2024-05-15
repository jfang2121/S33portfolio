import React from 'react';
import './Portfolio.css';
import hljs from 'highlight.js'
import "highlight.js/styles/base16/ros-pine.css"
import { useEffect } from "react";



const component_code = 
`import React from 'react';

function MyComponent() {
  return( 
    <p>
      I am a component!
    </p>
  )
}

export default MyComponent
`

const component_import_code = 
`import MyComponent from './path/to/your/component/MyComponent.tsx'

function Homepage(){
  return(
    <>
      <h1> This is my component: </h1>
      <MyComponent/>
    </>
  )
}
`


function Portfolio(){
	useEffect(() => {
	hljs.highlightAll();
	}, []);
	return(
		<div className="Portfolio">
			<h1> React </h1>
			<h2>Summary</h2>
			<p> 
				React.js is a Javascript library that makes writing web applications
				easier by providing an userface that makes interacting with the DOM,
				keeping track of state, and writing UI elemnts easier through.
			</p>
			<p>
				You can start a new React application through yarn and vite
				by writting the following command from the directory you want
				the parent directory of the project to be:
			</p>
			<code>
				yarn create vite	
			</code>
			<h2 className="components">Components</h2>
				<p> 
					The basic components of a react application. React allows us
					to describe a webpage using to create "components" (which are
					nothing more than a JS/TS functions that returns markup). It allows
					those components to be reused, and to be rendered conditionally
					depending on the changing state of the page.
				</p>
				<p>
					You can write a component like this:
				</p>
				<pre>
					<code>
						{component_code}
					</code>
				</pre>
				<p>
					And then import and use it like this:
				</p>
				<pre>
					<code>
						{component_import_code}
					</code>
				</pre>
			<h2 className="state">State</h2>
			<p>One of the things React lets us do quite easily is keep state on
			the client side. </p>
			<h2 className="properties">Properties</h2>
			<h2 className="hooks">Hooks</h2>
		</div>
	)
}

export default Portfolio;
