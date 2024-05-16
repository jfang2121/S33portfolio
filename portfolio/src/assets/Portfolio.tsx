import React, { useState } from 'react';
import './Portfolio.css';
import hljs from 'highlight.js'
import "highlight.js/styles/github-dark.css"
import { useEffect } from "react";
import MyParent from './MyParent';


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

const state_code = 
`import { useState } from 'react';

function MyComponent() {
  const [clicks, setClicks] = useState(STARTING_VALUE);
  setClicks++ //We can modify clicks with the setClicks function
  return(
    <p> {clicks} </p> // And bind its value to an element
  )
} 
`

const child_code = 
`interface props{
  id: string,
  color: string,
  children: string, //The children prop is whatever the tag nests
  onHover: () => void  //You can pass functions as props
}

function MyChild({id, color, children, onHover}: props) {
  return(
    <div 
     id={id} 
     style={{backgroundColor: color}} 
     onMouseEnter={onHover}
    >
      {children}
    </div>
  )
}

export default MyChild;
`

const parent_code=
`import React, { useState } from 'react';
import MyChild from './MyChild';

function MyParent() {
  const [hovers, setHovers] = useState(0);
  
  const handleHover = ()=>{
    setHovers((hovers) => hovers +1);	
    console.log(hovers);
  }
  
  const [myChildren, setMyChildren] = useState([
  
    {
      id: "1",
      color: "red",
      children: "I am a child!",
      onHover: handleHover,
    },
    {
      id: "2",
      color: "blue",
      children: "I am also a child!",
      onHover: handleHover,
    }
  ])
  
  return(
    <>
    <p>Hover Count: {hovers}</p>
    {myChildren.map((child)=>(
      <>
      <MyChild
        id={child.id}
        color={child.color}
        onHover={child.onHover}
      >
        {child.children}	
      </MyChild>
      <br />
      </>
    ))}
    </>
  )
  
} 

export default MyParent;
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

			<h2 className="hooks">Hooks</h2>
			
			<p>
				One of the things React lets us do quite easily is deal with updating
				the screen depending on the state of our application. We do this with
				"hooks," a really common one being the built-in useState: 
			</p>
			<pre>
				<code>
					{state_code}
				</code>
			</pre>
			<p>
				All elements that use the variable that keeps the state (clicks in 
				the exaple above) will have their views updated when the function
				associated with it is called (and setClicks, conversely).
			</p>

			<h2 className="properties">Properties</h2>

			<p>
				We will often want to pass state from a parent component to a child;
				React deals with this with what it calles "props" (short for properties).
				Props are written into the JSX tag of the child. Take the following example
				of a parent and child component:
			</p>

			<h3>Child</h3>

			<pre><code>
				{child_code}
			</code></pre>

			<h3>Parent</h3>
			<pre><code>
				{parent_code}
			</code></pre>

			<p>Which gives us the following!</p>

			<MyParent />
		</div>
	)
}

export default Portfolio;
