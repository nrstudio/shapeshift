import React from 'react';
import ReactDOM from 'react-dom';
import mainLogo from '../img/logo-800.png';
import taproom from '../img/taproom.jpg';
import taproomCrop from '../img/taproom_crop.jpg'

const Intro = () => {
	return (
		<section className="intro-container">
			<img src={taproom} className="taproom-pic"/>
			<img src={taproomCrop} className="taproom-crop"/>
		</section>
	);
}

export default Intro