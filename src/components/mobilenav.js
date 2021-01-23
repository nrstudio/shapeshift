import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components"
import logoIcon from '../img/logo-100.png';
import logo from '../img/logo-800.png';

const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<MenuBar>
			<img src={logoIcon} className="header-logo" alt="Logo Mark"/>
			<MenuIconContainer>
				<MenuIcon openMenu={openMenu} onClick={ () => setOpenMenu(!openMenu)}>
					<div/>
					<div/>
					<div/>
				</MenuIcon>
			</MenuIconContainer>
			<MenuLinks openMenu={openMenu}>
				<img src={logo} alt="Shapeshift Brewing" className="logo" />
				<ul>
					<li><h2><a href="#">Taproom</a></h2></li>
					<li><h2><a href="#">Beers</a></h2></li>
					<li><h2><a href="#">About</a></h2></li>
					<li><h2><a href="#">Find Us</a></h2></li>
				</ul>
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
`




