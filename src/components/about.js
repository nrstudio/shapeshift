import React from 'react'
import ReactDOM from 'react-dom'
import pic from '../img/about.jpg'
import picCrop from '../img/about-crop.jpg'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const About = () => {

	return (
		<>
			<h1 className="section-header">About Shapeshift</h1>
			<img src={pic} className="about-pic"/>
			<img src={picCrop} className="about-crop"/>
			<section className="beer-list">
				<article className="about">
					Shapeshift Brewing is really just a passion project
					imagined by brewmaster, Nick Robinson. In the late
					Summer and Fall of 2018, Nick began experimenting with
					homebrewing in his garage, where he often makes art
					and/or has band practice.
				</article>
			 	<article className="about">
			 		Shapeshift’s mantra is that everything changes, and
			 		that it is OK. The experience of beer is always different,
			 		depending on your mood, company, and environment.
			 		We hope the one consistent thing is the enjoyment
			 		that your senses bring to you when drinking our beer. Cheers!
			 	</article>
			 </section>
			 <section className="contact">
			 	<h1>Questions? Comments?</h1>
			 	<br/>
			 	
			 	<h3><HiOutlineMail className="email"/> nickrobinsonart@gmail.com</h3>
			 	<br/>
			 	<h3><HiOutlinePhone className="email"/> 123-456-7890</h3>
			 </section>
		 </>
	)
}


export default About