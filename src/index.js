import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import Intro from './components/intro';
import Taproom from './components/taproom';
import Beers from  './components/beers';
import Footer from './components/footer';
import './styles/index.css';

function App() {
	return (
		<React.Fragment>
			<Header title="Shapeshift Brewing"/>
			<section className="container">
				<Intro/>
				<Taproom/>
				<Beers/>
			</section>
			<Footer title="Shapeshift Brewing"/>
		</React.Fragment>
	);
}

ReactDom.render(
	<App />,
	document.getElementById('root')
	);
