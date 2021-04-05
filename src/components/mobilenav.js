import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import logoIcon from '../img/logo-100.png';
import logo from '../img/logo-800.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<MenuBar>
			<a href="/"><img src={logoIcon} className="header-logo" alt="Logo Mark"/></a>
			<MenuIconContainer>
				<MenuIcon openMenu={openMenu} onClick={ () => setOpenMenu(!openMenu)}>
					<div/>
					<div/>
					<div/>
				</MenuIcon>
			</MenuIconContainer>
			<MenuLinks openMenu={openMenu}>
				<Link to="/"><img src={logo} alt="Shapeshift Brewing" className="logo" /></Link>
				<ul>
					<li><h2><Link onClick={ () => setOpenMenu(!openMenu)} to="/taproom">In The Taproom</Link></h2></li>
					<li><h2><Link onClick={ () => setOpenMenu(!openMenu)} to="/beers">Beer List</Link></h2></li>
					<li><h2><Link onClick={ () => setOpenMenu(!openMenu)} to="/about">About</Link></h2></li>
					<li><h2><Link onClick={ () => setOpenMenu(!openMenu)} to="/findus">Find Us</Link></h2></li>
					<li><button className="social-btn"><FaFacebook className="social"/></button>
						<button className="social-btn"><FaInstagram className="social"/></button></li>
				</ul>
				<p>123 Hops Court</p>
				<p>New Haven, CT 06515</p>
				<p>123-456-7890</p>
				<h3><HiOutlineMail className="email" /> nickrobinsonart@gmail.com </h3>
			</MenuLinks>
		</MenuBar>
	);
}

export default MobileNav

const MenuBar = styled.header `
	@media only screen and (min-width: 600px) {
		display: none;
	}
	padding: 1.5rem;
	height: 5rem;
	position: relative;
	width: 100%;
	background: #fff;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.header-logo {
		width: 50px;
		height: 50px;
	}
`

const MenuIconContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const MenuIcon = styled.button`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: transparent;
	height: 1.5rem;
	outline; none;
	border: none;
	z-index: 11;

	div {
		width: 1.5rem;
		height: .25rem;
		background: #333;
		transform-origin: 1px;
		transition: background-color 350ms, opacity 250ms, transform 250ms;

		:first-child {
			transform: ${ ({ openMenu }) => openMenu ? "rotate(45deg)" : "rotate(0)" };
			background: ${ ({ openMenu }) => openMenu ? "#f4e484" : "#333" };
		}

		:nth-child(2) {
			opacity: ${ ({ openMenu }) => openMenu ? "0" : "1" };
			transform: ${ ({ openMenu }) => openMenu ? "translateX(-20px)" : "translateX(0)" };
		}

		:nth-child(3) {
			transform: ${ ({ openMenu }) => openMenu ? "rotate(-45deg)" : "rotate(0)" };
			background: ${ ({ openMenu }) => openMenu ? "#f4e484" : "#333" };
		}
	}
`

const MenuLinks = styled.nav`
	text-align: center;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #fff;
	z-index: 5;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100%;
	transition: opacity 300ms, transform 350ms ease-out;
	transform: ${ ({ openMenu }) => openMenu ? "translateY(0%)" : "translateY(-100%)"};
	opacity: ${ ({ openMenu }) => openMenu ? "1" : "0"};

	.logo {
		width: 60%;
		margin-bottom: 2rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		margin-bottom: 20px;
		text-align: center;
		list-style-type: none;
	}

	li {
		margin: 1rem;
		font-size: 2rem;

		a {
			text-decoration: none;
			color: #333;
			transition: color 300ms;

			:hover {
				color: #f4e484;
			}
		}
	}

	.social {
		height: 25px;
		height: 25px;
		margin: 10px;
	}

	.email {
		height: 20px;
		width: 20px;
		margin-bottom: -4px;
		margin-top: 10px;
	}
`




