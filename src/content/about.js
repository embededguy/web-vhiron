import React from 'react';
import './about.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import Aos from 'aos'
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { EffectCube, Pagination, Navigation, Autoplay } from 'swiper';
// import slide_image_1 from "images/vikram sir avatar.jpg";
// import slide_image_2 from "images/vikram sir avatar.jpg";
// import slide_image_3 from "images/vikram sir avatar.jpg";
import Footer from '../components/footer';
import back from '../vhiron-hex.svg'

function Component(props){
	return (	
		<>
		<div className='container'>
			<div className='hex' style={{background:`url(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"300px",height:"300px"}}>
				{props.year}
			</div>
			<div className='connector'>
				<img src='images/vhiron dots-connector.svg'></img>
			</div>
			<div className='box'>
			<p>Jinshaashan Infotech
	// 			2009
	// 			Services to 150+ Business Houses in Diamond, Metal & Textile Mkt.
	// 		</p>
			</div>
		</div>
		</>
	)
}
function About(){
	// slide_image_1 = <img src='vikram sir avatar.jpg'/>
	// let arr = []
	// let arr2 =[]
	// let arr3 = []
	// let x = 1;
	// for (let index = 0; index < 4; index++) {
	// 	arr.push(
	// 		<div className='connector' style={{marginTop:`${350}px`}}>
	// 			<img src='images/vhiron dots-connector.svg'/>
	// 		</div>
	// 	)
	// 	if (x==3) {
	// 		arr2.push(
	// 			<div className='years' style={{top:`${-1575}px`, marginTop:"80px"}}>
	// 				<img style={{opacity:"0.6"}} src='images/Vhiron timeline-shape.svg'/>
	// 				<div className='centered' style={{textAlign:"right", marginTop:"110px", marginLeft:"-1050px", fontSize:"50px"}}>2019</div>
	// 				<div className='box' style={{top:`${-1575}px`, marginTop:"40px"}}>
	// 				<p>Vhiron
	// 				   2019
	// 				   75+ Websites, 10+ Web Apps, 250+ Digital Marketing Clients, 5+ Communities with IT Support
	// 				   First in house 3D Printer prototype
	// 				</p>
	// 				</div>
	// 			</div>
	// 		)
	// 	}else if (x==2) {
	// 		arr2.push(
	// 			<div className='years' style={{top:`${-1575}px`, marginTop:"90px", flexDirection:"row-reverse", marginRight:"130px"}}>
	// 				<img style={{opacity:"0.6"}} src='images/Vhiron timeline-shape.svg'/>
	// 				<div className='centered' style={{textAlign:"right", marginTop:"110px", marginRight:"-760px", fontSize:"50px"}}>2010</div>
	// 				<div className='box' style={{top:`${-1575}px`, marginTop:"40px", marginLeft:"30px"}}>
	// 				<p>Gurukul Infoline
	// 				   2010
	// 				   Free Technical Education for Females
	// 				   1500+ Students Coached
	// 				</p>
	// 			</div>
	// 			</div>
	// 		)
	// 	}
	// 	else if (x==4) {
	// 		arr2.push(
	// 			<div className='years' style={{top:`${-1575}px`, marginTop:"100px", flexDirection:"row-reverse", marginRight:"130px"}}>
	// 				<img style={{opacity:"0.6"}} src='images/Vhiron timeline-shape.svg'/>
	// 				<div className='centered' style={{textAlign:"right", marginTop:"110px", marginRight:"-760px", fontSize:"50px"}}>2022</div>
	// 				<div className='box' style={{top:`${-1575}px`, marginTop:"40px", marginLeft:"30px"}}>
	// 				<p>Jinshaashan Info LLP
	// 				   2022
	// 				   3D Printer, Form Box, CNC
	// 				   Drone, IOT, Robotics
	// 				   AI, AR/MR/VR/XR,
	// 				   Space Defense

	// 				</p>
	// 			</div>
	// 			</div>
	// 		)
	// 	}
	// 	 else {
	// 	arr2.push(
	// 			<div className='years' style={{top:`${-1575}px`, marginTop:"120px"}}>
	// 				<img style={{opacity:"0.6"}} src='images/Vhiron timeline-shape.svg'/>
	// 				<div className='centered' style={{textAlign:"right", marginTop:"110px", marginLeft:"-1050px", fontSize:"50px"}}>2009</div>
	// 				<div className='box' style={{top:`${-1575}px`, marginTop:"40px"}}>
	// 				<p>Jinshaashan Infotech
	// 				   2009
	// 				   Services to 150+ Business Houses in Diamond, Metal & Textile Mkt.
	// 				</p>
	// 			</div>
	// 			</div>
	// 		)
	// 	}
	// 	x++;

	// }
	
	return(
		<>
			<div className="wrapper" style={{overflow:"hidden"}}>
				<h2 className="headingsabout">About Us</h2>
					<h2  className='underline'></h2>
					<p className='about-txt' style={{fontSize:"25px"}}>loremExercitation sint ad nostrud do nisi aliquip nulla quis aute aliquip in reprehenderit. Irure aliquip tempor et consequat in adipisicing ullamco excepteur. Duis velit occaecat commodo duis adipisicing ex veniam dolor pariatur excepteur ex culpa amet fugiat.</p>
					<img className='about-svg' src="images/People-of-different-races-together.svg"></img>
					<br></br>
					<br></br>
					<h2>Our Journey</h2>
					<div className='straightline'></div>
						<div className='connector2'>
							<Component year="2009"/>
							<Component year="2016"/>
							<Component year="2016"/>
							<Component year="2016"/>
						</div>
							<div className='team-section'>
								<h2 style={{marginTop:"500px"}}>Our Team</h2>
								<Swiper
								 effect={ 'cube' }
								 grabCursor = { true }
								 centeredSlides = { true }
								 loop = { true }
								 slidesPerView={3}
								 spaceBetween={50}
								 autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								  }}
								 cubeEffect={{
									shadow: true,
									slideShadows: true,
									shadowOffset: 20,
									shadowScale: 0.94,
								  }}
								 pagination={{clickable: true }}
								//  navigation={{
								//    nextEl: '.swiper-button-next',
								//    prevEl: '.swiper-button-prev',
								//    clickable: true,
								//  }}
								 modules={[Autoplay, EffectCube, Pagination]}
								 className='myswiper'
								>
									<SwiperSlide>
										<img src="images/vhiron_f.png" />
										<h2>Vhiron</h2>
										<p>In reprehenderit commodo pariatur consequat excepteur duis exercitation culpa deserunt. Exercitation laborum ad pariatur fugiat nisi irure deserunt in minim culpa laboris officia. Reprehenderit elit ullamco dolor exercitation. Est mollit non aute qui id minim irure dolore qui aliqua consequat velit. Aliqua aliquip ipsum elit id adipisicing.</p>
										<ul class="socialIcons">
												<li class="facebook"><a href=""><i class="fa fa-fw fa-linkedin"></i>Linkedin</a></li>
										</ul>
									</SwiperSlide>
									<SwiperSlide className='cube'>
          								<img src="images/vikram sir avatar.jpg" />
										<h2>Vikram Parikh</h2>
										<h3>CEO</h3>
										<p>Consectetur minim Lorem veniam id ut esse laborum exercitation elit ullamco laborum in dolor anim. Et veniam ea veniam quis elit ea id. Velit fugiat in do labore fugiat officia ex fugiat elit sit magna incididunt sit.</p>
										<ul class="socialIcons">
												<li class="facebook"><a href=""><i class="fa fa-fw fa-linkedin"></i>Linkedin</a></li>
										</ul>
        							</SwiperSlide>
									<SwiperSlide>
									<img src="images/vikram sir avatar.jpg" />
										<h2>Prakash Choudhary</h2>
										<h3>CTO</h3>
										<p>Consectetur minim Lorem veniam id ut esse laborum exercitation elit ullamco laborum in dolor anim. Et veniam ea veniam quis elit ea id. Velit fugiat in do labore fugiat officia ex fugiat elit sit magna incididunt sit.</p>
										<ul class="socialIcons">
												<li class="facebook"><a href=""><i class="fa fa-fw fa-linkedin"></i>Linkedin</a></li>
										</ul>
									</SwiperSlide>
									<SwiperSlide>
									<img src="images/vikram sir avatar.jpg" />
										<h2>Shidhishivakumar Mattaparthi</h2>
										<h3>CEO</h3>
										<p>Consectetur minim Lorem veniam id ut esse laborum exercitation elit ullamco laborum in dolor anim. Et veniam ea veniam quis elit ea id. Velit fugiat in do labore fugiat officia ex fugiat elit sit magna incididunt sit.</p>
										<ul class="socialIcons">
												<li class="facebook"><a href=""><i class="fa fa-fw fa-linkedin"></i>Linkedin</a></li>
										</ul>
									</SwiperSlide>
								</Swiper>
							</div>
			</div>
		</>
	);
}

export default About;
