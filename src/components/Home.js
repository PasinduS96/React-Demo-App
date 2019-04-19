import React from 'react';
import slide1 from './images/images/slide_1.jpg';
import slide2 from './images/images/slide_2.jpg';
import { Slide } from 'react-slideshow-image';
import Cards from './Cards';
export default function Home() {
	const properties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		arrows: true
	};
	return (
		<div>
			<div>
				<Slide {...properties}>
					<div className="each-slide">
						<div style={{ backgroundImage: `url(${slide1})` }}>
							<span>Slide 1</span>
						</div>
					</div>
					<div className="each-slide">
						<div style={{ backgroundImage: `url(${slide2})` }}>
							<span>Slide 2</span>
						</div>
					</div>
				</Slide>
			</div>
			<br />
			<div className="container">
				<div className="card-deck">
					<Cards
						title="Sample Card"
						disc="Some quick example text to build on the card title and make up the bulk of the card's content."
						btntxt="Button"
					/>
					<Cards
						title="Sample Card2"
						disc="Some quick example text to build on the card title and make up the bulk of the card's content."
						btntxt="Button"
					/>
					<Cards
						title="Sample Card3"
						disc="Some quick example text to build on the card title and make up the bulk of the card's content."
						btntxt="Button"
					/>
				</div>
			</div>
			<br />
		</div>
	);
}
