import React from 'react';
import ReactDom from 'react-dom';
import logo from '../img/logo-800.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import footerStyle from '../styles/footer.module.scss';

const Footer = (props) => {
	return (
		<main className={footerStyle.footer}>
			<section className={footerStyle.container}>
				<article className={footerStyle.footerCol}>
					<ul className={footerStyle.nav}>
						<a href="/taproom"><li>Taproom</li></a>
						<a href="/beers"><li>Beers</li></a>
						<a href="/about"><li>About</li></a>
						<a href="/findus"><li>Find Us</li></a>
					</ul>
					<a href="#"><FaFacebook className={footerStyle.social}/></a>
					<a href="#"><FaInstagram className={footerStyle.social}/></a>
				</article>
				<article className={footerStyle.footerCol}>
					<a href="/"><img src={logo} alt="Shapeshift Logo" className={footerStyle.logo}/></a>
				</article>
				<article className={footerStyle.footerCol}>
					
						<h4>{props.title}</h4>
						<p>123 Hops Court</p>
						<p>New Haven, CT 06515</p>
						<p>123-456-7890</p>
					<ul className={footerStyle.hours}>
						<li>Monday: <b>Closed</b></li>
						<li>Tuesday-Friday: <b>3pm-9pm</b></li>
						<li>Saturday-Sunday: <b>12pm-9pm</b></li>
					</ul>
				</article>
			</section>
			<p>Copyright 2021, All Content Belongs to Nick Robinson & Shapeshift Brewing</p>
		</main>
	);
};

export default Footer