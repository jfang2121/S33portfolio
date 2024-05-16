import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Portfolio from './Portfolio';
import './Homepage.css';


function Homepage(){
	const scrollToElement = (id: string) => {
		const current =  document.getElementById(id)
	}
	return(
		<div className="homepage">
			<div className="homepage__sidebar">
				<Sidebar />
			</div>
			<div className="homepage__portfolio">
				<Portfolio />
			</div>
		</div>
	)
}

export default Homepage;
