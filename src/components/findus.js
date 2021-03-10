import React from 'react'
import { storedata } from '../data/storedata.js'
import { bardata } from '../data/bardata.js'

const FindUs = () => {

	return (
		<>
			<h1 className="section-header">Find Us Elsewhere</h1>
			<section className="store-list">
				<article className="stores">
					<h2>Stores</h2>

					{storedata.map((storeItem) => { 
						const { name, address, phone } = storeItem;
						return (
							<div className="findus" key={storeItem}>
								<h3>{name}</h3>
								<p>{address}</p>
								<p>{phone}</p>
							</div>
						);
					})}
				</article>
				<article className="stores">
					<h2>Bars & Restaurants</h2>

					{bardata.map((barItem) => { 
						const { name, address, phone } = barItem;
						return (
							<div className="findus" key={barItem}>
								<h3>{name}</h3>
								<p>{address}</p>
								<p>{phone}</p>
							</div>
						);
					})}
				</article>
			 </section>
		 </>
	)
}


export default FindUs