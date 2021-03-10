import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logoIcon from '../img/logo-100.png';
import logoType from '../img/logotype.jpg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const DesktopNav = () => {
	return (
		<section className="header">
			<div className="head-wrap">
				<Link to="/"><img src={logoType} className="header-type" alt="SHAPESHIFT BREWING"/></Link>
				<a href="/"><img src={logoIcon} className="header-logo" alt="Logo Mark"/></a>
				<ul className="topnav">
					<Link to="/taproom"><li className="nav-item">In The Taproom</li></Link>
					<Link to="/beers"><li className="nav-item">Beer List</li></Link>
					<Link to="/about"><li className="nav-item">About</li></Link>
					<Link to="/findus"><li className="nav-item">Find Us</li></Link>
				</ul>
				<a href="#"><FaFacebook className="social"/></a>
				<a href="#"><FaInstagram className="social"/></a>
			</div>
		</section>
	);
}

export default DesktopNav