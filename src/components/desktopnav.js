import React from 'react';
import ReactDOM from 'react-dom';
import logoIcon from '../img/logo-100.png';

const DesktopNav = () => {
	return (
		<section className="header">
			<div className="head-wrap">
				<h2 className="nav-title">Shapeshift Brewing</h2>
				<img src={logoIcon} className="header-logo" alt="Logo Mark"/>
				<ul className="topnav">
					<li className="nav-item">Taproom</li>
					<li className="nav-item">Beer</li>
					<li className="nav-item">About</li>
					<li className="nav-item">Find Us</li>
				</ul>
			</div>
		</section>
	);
}

export default DesktopNav