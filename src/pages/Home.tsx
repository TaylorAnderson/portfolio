

import Connector from '../Connector';
import Client from '../Client';
import HDClientImage from '../assets/client_hd.png'
import SSClientImage from '../assets/client_ss.png'
import PDClientImage from '../assets/client_pd.png'
import './Home.css'
import { FaComment } from 'react-icons/fa6';
function Home() {
	return (
		<div>
			<div className="header">
				<div id="header-bg"></div>
				<div className="header-content">
					<h1>Taylor<br />Anderson</h1>
					<h2>Game developer and designer</h2>
				</div>
			</div>
			<Connector includeArrow={true} />
			<div className='blurb'>
				<div id="blurb-content">
					<h2>
						<div id="blurb-bg"><FaComment color="#000000" size={400} /></div>
						Hello! I’m Taylor.
					</h2>
					<p>
						I’m a game developer, designer and pixel artist with over 10 years of experience based in Toronto, ON. If you need help turning an idea into the first playable version of your game, help connecting design with art and music for your project, or an extra pair of hands to get to launch, I can help.  My email is taylor [at] taylor-anderson.work.
					</p>
				</div>
			</div>
			<Connector />
			<div id="clients">
				<h2>clients</h2>
				<div id="client-list">
					<Client imagePath={HDClientImage} url='https://x.com/hedgehogdreams_' id="hd" />
					<Client imagePath={SSClientImage} url='https://www.beginlearning.com/sesame-mm/pdp' id="ss" />
					<Client imagePath={PDClientImage} url='https://play.date/games/faraway-fairway/' id="ff" />
				</div>
			</div>
			<Connector />
			<div id="testimonials">
				<h2>testimonials</h2>
				<blockquote className="testimonial">
					I can't say enough about Taylor. A great game developer, super collaberator and was an integral part of helping Homer deliver the interactive content for our Learn with Sesame product launch. I reccomend Taylor as a great addition to any team!
					<br />
					<br />
					-paul cottrell, engineering manager on the learn with sesame project
				</blockquote>

				<blockquote className="testimonial">
					Taylor and I had an incredible time developing Faraway Fairway. Their meticulous attention to detail, unwavering work ethic, and ability to grasp and execute directions made them an invaluable asset to the project. Their collaboration was instrumental in the success of Faraway Fairway, and I highly recommend their services for any future endeavors.
					<br />
					<br />
					-rokashi, lead designer on faraway fairway
				</blockquote>
			</div>
		</div>


	)
}

export default Home;