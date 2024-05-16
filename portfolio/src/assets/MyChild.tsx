import React from 'react';

interface props{
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
