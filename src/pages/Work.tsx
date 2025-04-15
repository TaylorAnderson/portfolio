import FFImage from '../assets/playdate-20250325-111403.png'
import SSImage from '../assets/included-sesame-desktop.png'
import IMImage from '../assets/intromath.jpg'
import './Work.css'
function Work() {
	return (
		<div id="work">
			<h1>work</h1>
			<hr />
			<div className="project">
				<h2>Faraway Fairway</h2>
				<div className="content">
					<div className="image"><img src= {FFImage} /></div>
					<div className='text'>Faraway Fairway is a video game for the Playdate console. It’s a chill procedurally generated golf game with courses that are vibrant and alive, with secrets around every corner. I programmed the game, created the art for it, and helped in it’s design.</div>
					
				</div>

			</div>
			<div className="project">
				<h2>Learn with Sesame</h2>
				<div className="content">
					<div className="image"><img src= {SSImage} /></div>
					<div className='text'>Learn with Sesame is a collaboration between Sesame Street Workshop and HOMER. On this project, I was brought in to build out games and experiences to teach early education concepts. I worked with a small, dedicated team of other programmers and educators.</div>
					
				</div>

			</div>
			<div className="project">
				<h2>Intromath</h2>
				<div className="content">
					<div className="image"><img src= {IMImage} /></div>
					<div className='text'>
						<p>Intromath is an educational course for college students that provides introductory math courses in an intuitive and engaging way.</p>
						<p>On this project, I worked with an educator and an artist building out courses, implementing their plans and contributing to the design of interactive games and content.</p>
					</div>
					
				</div>

			</div>
			
		</div>
	)
}

export default Work;