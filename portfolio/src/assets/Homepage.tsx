import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Portfolio from './Portfolio';
import './Homepage.css';


function Homepage(){
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
