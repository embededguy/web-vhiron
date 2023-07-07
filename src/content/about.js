import React from 'react';
import './about.css';
import background from "../about-map.png";
import Footer from "../components/footer.js"
import Zoom from 'react-reveal/Zoom';
import hex from '../timeline-shape.svg'
import connector from '../dot-connector.svg'
import Fade from 'react-reveal/Fade';
import {Swiper,SwiperSlide} from "swiper/react";
import { EffectCube, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

function About(){
	return(
		<>

			<section className='about-outer'>
				<div className='about-us-container' style={{background:`url(${background})`,backgroundPosition:"center",width:"100vw"}}>
					<h1>About Us</h1>

					<div className='about-outer-c'>
						<div>
							<Zoom>
								<img src="images/about-us-banner.png"/>
							</Zoom>
						</div>
						<div>
							<p className='about-txt' style={{fontSize:"25px"}}>lorem culpa amet fugiat.
							lorem culpa amet fugiat.lorem culpa amet fugiat.lorem culpa amet fugiat.lorem culpa amet fugiat.lorem culpa amet fugiat.
							lorem culpa amet fugiat.lorem culpa amet fugiat.lorem culpa amet fugiat.lorem culpa amet fugiat.lorem culpa amet fugiat.
							</p>
						</div>
					</div>
				</div>

			</section>
			<section className='about-outer2'>
				<div className='timeline'>
					<h2 style={{textAlign:"center",fontSize:"40px",fontWeight:"600",marginTop:"50px"}}>Our Journey</h2>
					<p style={{textAlign:"center",fontSize:"25px",fontWeight:"100",marginTop:"20px",marginBottom:"20px"}}>Come join us in our journey to growth and betterment.</p>
					<div className='center-line'></div>
					<div className='timeline-inner'>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className="timeline-hex-o">
									<Fade left><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2009</div></Fade>
								</div>
								<div className='timeline-hex-o-2'>
									<Fade left><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2009</div></Fade>
								</div>
								<div className='timeline-txt-o'>
									<Fade right>
									<div className="timeline-txt">
										<h1>FOUNDED</h1>
										<p>webdew was co-founded by Mr. Danish Wadhwa and Mrs. Chehak Wadhwa, to quickly become the top marketing agency in India, and soon one of the most recognized in the world.</p>
									</div>
									</Fade>
								</div>
							</div>
						</div>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className='timeline-hex-o-2'>
									<Fade left><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2011</div></Fade>
								</div>
								<div className='timeline-txt-o'>
									<Fade left>
									<div className="timeline-txt">
										<h1>FOUNDED</h1>
										<p>webdew was co-founded by Mr. Danish Wadhwa and Mrs. Chehak Wadhwa, to quickly become the top marketing agency in India, and soon one of the most recognized in the world.</p>
									</div>
									</Fade>
								</div>
								<div className="timeline-hex-o">
									<Fade right><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2011</div></Fade>
								</div>
							</div>
						</div>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className='timeline-hex-o'>
									<Fade left><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2016</div></Fade>
								</div>
								<div className='timeline-hex-o-2'>
									<Fade left><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2016</div></Fade>
								</div>
								<div className='timeline-txt-o'>
									<Fade right>
									<div className="timeline-txt">
										<h1>FOUNDED</h1>
										<p>webdew was co-founded by Mr. Danish Wadhwa and Mrs. Chehak Wadhwa, to quickly become the top marketing agency in India, and soon one of the most recognized in the world.</p>									
									</div>
									</Fade>
								</div>
							</div>
						</div>
						<div className='timeline-c'>
							<div className='timeline-main'style={{background:`url(${connector})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 22px;"}} >
								<div className='timeline-hex-o-2'>
									<Fade left><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2019</div></Fade>
								</div>
								<div className='timeline-txt-o'>
									<Fade left>
									<div className="timeline-txt">
										<h1>FOUNDED</h1>
										<p>webdew was co-founded by Mr. Danish Wadhwa and Mrs. Chehak Wadhwa, to quickly become the top marketing agency in India, and soon one of the most recognized in the world.</p>									

									</div>
									</Fade>
								</div>
								<div className='timeline-hex-o'>
									<Fade right><div className='timeline-hex' style={{background:`url(${hex})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}>2019</div></Fade>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='ourteam'>
				<div>
					<h2 style={{textAlign:"center",fontSize:"40px",fontWeight:"600",marginTop:"50px"}}>Our Team</h2>			
				</div>
				<div className="teamGrid">
				<div className="colmun">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="avatar"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="Member" /></div>
              <div className="member-name"> <h2 align="center">Vikram Parikh
                </h2> </div>
              <div className="member-info"><p align="center">Lorem Ipsum is a simply dummy text of the printing and typesetting industry.</p></div>
              <div className="member-mail"> <p align="center"> <a href="mailto:@gmail.com">mailto:@gmail.com</a> </p> </div>
              <div className="member-social"> 
                <ul className="social-listing">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        <div className="colmun">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="avatar"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="Member" /></div>
              <div className="member-name"> <h2 align="center">Shiva
                </h2> </div>
              <div className="member-info"><p align="center">Lorem Ipsum is a simply dummy text of the printing and typesetting industry.</p></div>
              <div className="member-mail"> <p align="center"> <a href="mailto:@gmail.com">mailto:@gmail.com</a> </p> </div>
              <div className="member-social"> 
                <ul className="social-listing">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        <div className="colmun">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="avatar"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="Member" /></div>
              <div className="member-name"> <h2 align="center">Prakash Choudhary
                </h2> </div>
              <div className="member-info"><p align="center">Lorem Ipsum is a simply dummy text of the printing and typesetting industry.</p></div>
              <div className="member-mail"> <p align="center"> <a href="mailto:@gmail.com">mailto:@gmail.com</a> </p> </div>
              <div className="member-social"> 
                <ul className="social-listing">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
		</div>
		<br/>


			</section>

			<Footer/>
		</>
	);
}

export default About;
