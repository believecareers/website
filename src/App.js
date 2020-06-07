import React from 'react';
import Picture2 from './young_students.jpg';
import Servicepic from './BELIEVE CAREERS Process (1).jpg';
import Summer from './summer.PNG';
import Winter from './winter.PNG';
import Kapil from './Kapil.jpg';
import Vaibhav from './Vaibhav.jpg';
import Jiten from './Jiten.jpg';
import Deepak from './Deepak.jpg';

function App() {
	return (
		<div className="App">
			<div id="nav_bar">
				<div id="nav_container">
					<nav id="navbar">
						<a href="#home">
							<h1>Believe Careers</h1>
						</a>
						<ul id="navtags">
							<a href="#home">
								<li>Home</li>
							</a>

							<a href="#services">
								<li>Services</li>
							</a>
							<a href="#mentor">
								<li>Mentors</li>
							</a>
							<a href="#timeline">
								<li>Timelines</li>
							</a>
							<a href="#blog">
								<li>Blog</li>
							</a>
							<a href="#package">
								<li>Pricing</li>
							</a>
							<a href="#contact">
								<li>Contact</li>
							</a>
						</ul>
					</nav>
				</div>
			</div>
			<section id="home">
				<div id="landing_page">
					<div>
						<h1>YOU BELIEVE, WE DELIVER</h1>
						<a href="https://bit.ly/2yy8zxs" target="_blank" rel="noopener noreferrer">
							<button id="enroll">Enroll Now!</button>
						</a>
					</div>
					<img src={Picture2} />
				</div>

				<div className="arrow-down">
					<a href="#services">
						<button id="arrow">
							<i class="fa fa-angle-down" />
						</button>
					</a>
				</div>
			</section>
			<section id="services">
				<img src={Servicepic} />
			</section>
			<section id="mentor">
				<h2 className="section-title">
					<u>Our Mentors</u>
				</h2>
				<div>
					<div className="mentor-grid">
						<div className="box">
							<img src={Kapil} />
							<h2>Kapil</h2>
							<p>AUTO1 Group</p>
							<p>Hochschule Hof</p>
						</div>
						<div className="box">
							<img src={Vaibhav} />
							<h2>Vaibhav</h2>
							<p>Arvato Bertelsmann</p>
							<p>FHM Uni of Applied Science, Berlin</p>
						</div>
						<div className="box">
							<img src={Deepak} />
							<h2>Deepak</h2>
							<p>ANT Neuro</p>
							<p>TU Berlin</p>
						</div>
						<div className="box">
							<img src={Jiten} />
							<h2>Jiten</h2>
							<p>Hilti Deutschalnd</p>
							<p>RWTH Aachen</p>
						</div>
					</div>
				</div>
			</section>
			<section id="timeline">
				<h2 className="section-title">
					<u>Application Timelines</u>
				</h2>
				<div className="timeline-images">
					<div>
						<img src={Summer} />
						<h2>Summer Intake</h2>
					</div>
					<div>
						<img src={Winter} />
						<h2>Winter Intake</h2>
					</div>
				</div>
			</section>
			<section id="blog">
				<h2>Blog</h2>
			</section>
			<section id="package">
				<h2 className="section-title package-title">
					<u>Pricing</u>
				</h2>
				<div id="pricing">
					<div className="basic package">
						<h2>Basic</h2>
						<h2>11,999/- INR</h2>
						<h3>Upto 2 Universities</h3>
					</div>

					<div className="advanced package">
						<h2>Advanced</h2>
						<h2>20,999/- INR</h2>
						<h3>Upto 5 Universities</h3>
					</div>
					<div className="premium package">
						<h2>Premium</h2>
						<h2>27,499/- INR</h2>
						<h3>Upto 8 Universities</h3>
					</div>
				</div>
			</section>
			<section id="contact">
				<div id="contact_des">
					<h2>Believe Careers</h2>
					<p>
						Believe Careers is a robust platform envisioned to provide on-point guidance to the students for
						seeking higher education and career opportunities in Germany and rest of World
					</p>
				</div>
				<div>
					<ul className="quick-links">
						<h2>Quick Links</h2>
						<li>Services</li>
						<li>Mentors</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
				</div>

				<div>
					<h2>Contact</h2>
					<p>
						<i class="far fa-envelope" /> Email:{' '}
						<a href="mailto:prayagd21@gmail.com" className="email">
							info@believecareers.in
						</a>
					</p>
					<p>
						<i class="fas fa-phone" /> Phone:{' '}
						<a href="tel:+919172460345" className="email">
							+91 9172460345
						</a>
					</p>
					<div id="follow_links">
						<h2>Follow us</h2>
						<ul className="contact-tag">
							<li>
								<a
									href="https://www.facebook.com/believecareers/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-facebook" />
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/believecareers/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-instagram" />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/believe-careers"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-linkedin" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<a href="https://www.freepik.com/free-photos-vectors/business">Freepik</a>
		</div>
	);
}

export default App;
