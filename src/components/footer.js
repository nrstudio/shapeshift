import React from 'react';
import ReactDom from 'react-dom';
import logo from '../img/logo-800.png';
import footerStyle from '../styles/footer.module.scss';

const Footer = (props) => {
	return (
		<main className={footerStyle.footer}>
			<section className={footerStyle.container}>
				<article className={footerStyle.footerCol}>
					<ul className={footerStyle.nav}>
						<li>Taproom</li>
						<li>Beers</li>
						<li>About</li>
						<li>Find Us</li>
					</ul>
				</article>
				<article className={footerStyle.footerCol}>
					<img src={logo} alt="Shapeshift Logo" className={footerStyle.logo}/>
				</article>
				<article className={footerStyle.footerCol}>
					
						<h4>{props.title}</h4>
						<p>123 Hops Court</p>
						<p>New Haven, CT 06515</p>
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