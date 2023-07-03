import React from 'react';
import './about.css';
import background from "../about-map.png";
import Footer from "../components/footer.js"
function About(){
	return(
		<>

			<section className='about-outer'>
				<div className='about-us-container' style={{background:`url(${background})`,backgroundPosition:"center",width:"100vw"}}>
					<h1>About Us</h1>

				</div>
			</section>
			<Footer/>
		</>
	);
}

export default About;
