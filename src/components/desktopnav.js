import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../img/logo-100.png';
import logoType from '../img/logotype.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const DesktopNav = () => {
	return (
		<section className="header">
			<div className="head-wrap">
				<Link to="/"><img src={logoType} className="header-type" alt="SHAPESHIFT BREWING"/></Link>
				<Link to="/"><img src={logoIcon} className="header-logo" alt="Logo Mark"/></Link>
				<ul className="topnav">
					<Link to="/taproom"><li className="nav-item">In The Taproom</li></Link>
					<Link to="/beers"><li className="nav-item">Beer List</li></Link>
					<Link to="/about"><li className="nav-item">About</li></Link>
					<Link to="/findus"><li className="nav-item">Find Us</li></Link>
					
				</ul>
				<button className="social-btn"><FaFacebook className="social"/></button>
				<button className="social-btn"><FaInstagram className="social"/></button>
			</div>
		</section>
	);
}

export default DesktopNav