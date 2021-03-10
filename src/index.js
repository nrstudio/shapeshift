import React from 'react';
import ReactDom from 'react-dom';
import {
  		BrowserRouter as Router,
  		Route
	} from "react-router-dom";
import Header from './components/header';
import Intro from './components/intro';
import Taproom from './components/taproom';
import Beers from  './components/beers';
import About from './components/about';
import FindUs from './components/findus';
import Footer from './components/footer';
import './styles/index.css';

function App() {
	return (
		<Router>
			<Header title="Shapeshift Brewing"/>
				<section className="container">
					
						<Route exact path="/" component={Intro} />
							
						<Route path="/taproom" component={Taproom}/>
							
						<Route path="/beers" component={Beers}/>
					
						<Route path="/about" component={About}/>
					
						<Route path="/findus" component={FindUs}/>
						
				</section>
			<Footer title="Shapeshift Brewing"/>
		</Router>
	);
}

ReactDom.render(
	<App />,
	document.getElementById('root')
	);
