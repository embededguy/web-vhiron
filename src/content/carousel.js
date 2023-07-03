import './carousel.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Carousel(){
	let i = 0;
	setInterval(()=>{

		if (document.getElementsByClassName("slider__nav")[i]){
			document.getElementsByClassName("slider__nav")[i].checked = true;
			i++;
			if(i==4){
				i=0;
			}
		}
		
	},4000)
	return (
		<div className="slider">
  			<input type="radio" name="slider" title="slide1" defaultChecked={true} className="slider__nav"/>
  			<input type="radio" name="slider" title="slide2" className="slider__nav"/>
  			<input type="radio" name="slider" title="slide3" className="slider__nav"/>
  			<input type="radio" name="slider" title="slide4" className="slider__nav"/>
			<div className="slider__inner">
			    <div className="slider__contents">
			    	<img loading="lazy" src="images/vhiron-carousel-1.jpg"/>
			    </div>
			    <div className="slider__contents">
 				    <img loading="lazy" src="images/vhiron-carousel-2.jpg"/>
			    </div>
			    <div className="slider__contents">
 				    <img loading="lazy" src="images/vhiron-carousel-3.jpg"/>
			    </div>
			    <div className="slider__contents">
 				    <img loading="lazy" src="images/vhiron-carousel-4.png"/>
			    </div>
			</div>
		</div>
	);
}

export default Carousel;