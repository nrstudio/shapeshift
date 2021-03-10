import React from 'react';
import ReactDOM from 'react-dom';
import mainLogo from '../img/logo-800.png';
import cans from '../img/cans.jpg';
import cansCrop from '../img/cans-crop.jpg'

const Intro = () => {
	return (
		<section className="intro-container">
			<img src={cans} className="cans-pic"/>
			<img src={cansCrop} className="cans-crop"/>
		</section>
	);
}

export default Intro