import React from 'react';
import cans from '../img/cans.jpg';
import cansCrop from '../img/cans-crop.jpg'

const Intro = () => {
	return (
		<section className="intro-container">
			<img src={cans} alt="Campfire Headphase IPA 16oz Cans Shot" className="cans-pic"/>
			<img src={cansCrop} alt="Campfire Headphase IPA 16oz Cans Shot" className="cans-crop"/>
		</section>
	);
}

export default Intro