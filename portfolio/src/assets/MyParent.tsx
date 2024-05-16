import React, { useState } from 'react';
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
