import React from 'react'
import { beerdata } from '../data/beerdata.js'

function Beers() {

	return (
		<>
			<h1 className="section-header">Our Beer List</h1>
			<section className="beer-list">

			 	{beerdata.map((beerItem) => {
			 		const { name, label, type, alc, description } = beerItem;
			 		return (
			 			
				 			<article className="beer-item">

				 				<label class="card-flip">
									<input type="checkbox" />
										<div className="card">
											<div className="front">
					 							<img key={beerItem} src={label} alt={name} />
					 						</div>
					 						<div className="back">
					 							<h3>{name}</h3>
					 							<p>
					 								{description}
					 							</p>
					 						</div>
				 						</div>
				 				</label>
				 				<h2>{name}</h2>
				 				<h3>{type}</h3>
				 				<h3>{alc}</h3>
				 			</article>	 		
			 		)
			 	})}
			 </section>
		 </>
	)
}


export default Beers