import React from 'react';
import ReactDom from 'react-dom';
import tapStyle from '../styles/tap.module.scss';

import logo from '../img/logo-800.png'; import phobos from '../img/phobos.gif';
import camp from '../img/camp.gif'; import bloom from '../img/bloom.gif';
import hex from '../img/hex.gif'; import into from '../img/into.gif';
import { GiSodaCan } from 'react-icons/gi';
import { GiBeerBottle } from 'react-icons/gi';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Taproom = (props) => {
	return (
		<main className={tapStyle.container}>
			<h1>Taproom</h1>
			<section className={tapStyle.content}>
				<article>
					<h2>What's On Tap?</h2>
					<ul className={tapStyle.list}>
						<li className={tapStyle.listItem}>
							<img src={camp} alt="Logo" className={tapStyle.icon}/>
							Campfire Headphase IPA (6.2%)</li>
						<li className={tapStyle.listItem}>
							<img src={bloom} alt="Logo" className={tapStyle.icon}/>
							Bloom Pilsner (5.0%)</li>
						<li className={tapStyle.listItem}>
							<img src={hex} alt="Logo" className={tapStyle.icon}/>
							Hexagram IPA (6.5%)</li>
						<li className={tapStyle.listItem}>
							<img src={into} alt="Logo" className={tapStyle.icon}/>
							Into Another Session (4.8%)</li>
						<li className={tapStyle.listItem}>
							<img src={phobos} alt="Logo" className={tapStyle.icon}/>
							Phobos Imperial Stout (10.5%)</li>
					</ul>
				</article>
				<article>
					<h2>Beer-To-Go</h2>
					<p><i>Limit 2 per-style, per-person</i></p>
					<ul className={tapStyle.list}>
						<li className={tapStyle.listItem}>
							<GiSodaCan className={tapStyle.icon}/>
							Campfire Headphase 4pk</li>
						<li className={tapStyle.listItem}>
							<GiSodaCan className={tapStyle.icon}/>
							Cloudkicker 4pk</li>
						<li className={tapStyle.listItem}>
							<GiBeerBottle className={tapStyle.icon}/>
							Jupiter 500mL Bottle</li>
					</ul>
				</article>
			</section>
			<section className={tapStyle.visit}>
				<article className={tapStyle.visitLeft}>
					<h2>Wanna visit?<br/>We just need to ask you for few favors
					<IoMdArrowRoundForward className={tapStyle.arrow}/></h2>
				</article>
				<article className={tapStyle.visitRight}>
					<h3>• Please wear a mask while not sitting at a table</h3>
					<h3>• We have a visit time limit of 2hrs per group</h3>
					<p><i>We hate this too, but we have to work with the pandemic.</i></p>
					<h3>• Dogs are welcome, but please have them on a leash</h3>
					<h3>• Lastly, drink responsibly and have fun!</h3>
				</article>
			</section>
		</main>
	);
};

export default Taproom