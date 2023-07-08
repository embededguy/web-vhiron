import './carousel.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import c1 from "../img/vhiron-carousel-1.jpg"
import c2 from "../img/vhiron-carousel-2.jpg"
import c3 from "../img/vhiron-carousel-3.jpg"
import c4 from "../img/vhiron-carousel-4.png"
import { useEffect,useState } from 'react';
function Carousel(){
	let i = 0;

	useEffect(() => {
		let intervalId = setInterval(()=>{

			if (document.getElementsByClassName("slider__nav")[i]){
				document.getElementsByClassName("slider__nav")[i].checked = true;
				i++;
				if(i==4){
					i=0;
				}
			}
			
		},3500)
		return(() => {
			clearInterval(intervalId)
		})
	},[])
	return (
		<div className="slider">
  			<input type="radio" name="slider" title="slide1" defaultChecked={true} className="slider__nav"/>
  			<input type="radio" name="slider" title="slide2" className="slider__nav"/>
  			<input type="radio" name="slider" title="slide3" className="slider__nav"/>
  			<input type="radio" name="slider" title="slide4" className="slider__nav"/>
			<div className="slider__inner">
			    <div className="slider__contents">
			    	<img loading="lazy" src={c1}/>
			    </div>
			    <div className="slider__contents">
 				    <img loading="lazy" src={c2}/>
			    </div>
			    <div className="slider__contents">
 				    <img loading="lazy" src={c3}/>
			    </div>
			    <div className="slider__contents">
 				    <img loading="lazy" src={c4}/>
			    </div>
			</div>
		</div>
	);
}

export default Carousel;