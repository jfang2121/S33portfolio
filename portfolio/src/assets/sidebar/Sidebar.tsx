import React from 'react';
import './Sidebar.css'
import reactLogo from './react.svg'

function Sidebar(){
	return(
		<div className="sidebar">
			<a href="https://react.dev" target="_blank">
			  <img src={reactLogo} className="logo react" alt="React logo" />
			</a>
			<div className="sidebar__buttons">
				
				<button className="sidebar__button">
					<span>Summary</span>
				</button>
				<button className="sidebar__button">
					<span>Components</span>
				</button>
			</div>
		</div>
	)
}

export default Sidebar;

