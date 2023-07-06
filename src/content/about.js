import React from 'react';
import './about.css';
import background from "../about-map.png";
import Footer from "../components/footer.js"
import Zoom from 'react-reveal/Zoom';
import hex from '../timeline-shape.svg'
import connector from '../dot-connector.svg'

function About(){
	return(
		<>

			<section className='about-outer'>
				<div className='about-us-container' style={{background:`url(${background})`,backgroundPosition:"center",width:"100vw"}}>
					<h1>About Us</h1>

					<div className='about-outer-c'>
						<div>
							<Zoom>
								<img src="images/about-us-banner.png" style={{width:"50vw"}}/>
							</Zoom>
						</div>
						<div>
							<p className='about-txt' style={{fontSize:"25px"}}>loremExercitation sint ad nostrud do nisi aliquip nulla quis aute aliquip in reprehenderit. Irure aliquip tempor et consequat in adipisicing ullamco excepteur. Duis velit occaecat commodo duis adipisicing ex veniam dolor pariatur excepteur ex culpa amet fugiat.</p>
						</div>
					</div>
				</div>

			</section>
			<section className='about-outer2'>
				<div className='timeline'>
					<div className='center-line'></div>
					<div className='timeline-inner'>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className="timeline-hex-o">
									<div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2009</div>
								</div>
								<div className='timeline-txt-o'>
									<div className="timeline-txt">dkasdksajdkjasdka</div>
								</div>
							</div>
						</div>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className='timeline-txt-o'>
									<div className="timeline-txt">dkasdksajdkjasdka</div>
								</div>
								<div className="timeline-hex-o">
									<div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>20011</div>
								</div>
							</div>
						</div>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className='timeline-hex-o'>
									<div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2016</div>
								</div>
								<div className='timeline-txt-o'>
									<div className="timeline-txt">dkasdksajdkjasdka</div>
								</div>
							</div>
						</div>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className='timeline-txt-o'>
									<div className="timeline-txt">dkasdksajdkjasdka</div>
								</div>
								<div className='timeline-hex-o'>
									<div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2019</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</section>
			<Footer/>
		</>
	);
}

export default About;
