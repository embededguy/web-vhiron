import React,{useState} from "react";
import './blogslider.css';
import { Swiper,SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function BlogSlider(){
    const [currentSlide,setCurrentSlide] = useState(0)
    
      
    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
      };
    
      const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
      };
    return(
        <>
            <div className="blog-slider_container">
                <div className="blog-slider_slides">
                    <Swiper
                    effect={EffectCoverflow}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={
                        {
                            rotate: 50,
                            stretch:0,
                            depth:100,
                            modifier:1,
                            slideShadows:true,
                        }}
                        pagination={true}
                        navigation={true}
                        modules={[EffectCoverflow,Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{transform:"translate3d(0px,0px,-0px) rotateX(0deg) rotateY(0deg) scale(1) !important",transitionDuration:"0ms",zIndex:0}}>
                            <div>
                                {/* style={currentSlide === 0 ? { zIndex: 1 } : currentSlide === 1 ? { zIndex: 5, width: '50%' } : { zIndex: 1 }}  */}
                                <img width={528} height={497} src="https://redingtongroup.com/wp-content/uploads/2023/01/cyber-ck.png"></img>
                                <div className="blog-content">
                                    <h2>AI & Automation: The Changing Landscape of Cybersecurity for MSMEs</h2>
                                    <p>Artificial intelligence (AI) and automation are transforming the IT ecosystem to create new opportunities and enhance existing business operations.</p>
                                    <a href="#" className="blg-btn">Explore more</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    <SwiperSlide style={{transform:"translate3d(0px,0px,-100px) rotateX(0deg) rotateY(-50deg) scale(1 ) !important",transitionDuration:"0ms",zIndex:0}}>
                    <div>  
                        {/* style={currentSlide === 0 ? { zIndex: 1 } : currentSlide === 1 ? { zIndex: 5, width: '50%' } : { zIndex: 1 }} */}
                        <img width={528} height={497} src="https://redingtongroup.com/wp-content/uploads/2023/01/tech-8.png"></img>
                        <div className="blog-content">
                            <h2>AI & Automation: The Changing Landscape of Cybersecurity for MSMEs</h2>
                            <p>Artificial intelligence (AI) and automation are transforming the IT ecosystem to create new opportunities and enhance existing business operations.</p>
                            <a href="#" className="blg-btn">Explore more</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide style={{transform:"translate3d(0px,0px,-200px) rotateX(0deg) rotateY(-100deg) scale(1) !important",transitionDuration:"0ms",zIndex:0}}>
                    <div> 
                        {/* style={currentSlide === 0 ? { zIndex: 1 } : currentSlide === 1 ? { zIndex: 5, width: '50%' } : { zIndex: 1 }} */}
                        <img width={528} height={497} src="https://redingtongroup.com/wp-content/uploads/2023/05/Homepage-Blog-5_stock-photo-female-hr-manager-greeting-job-candidate-1517983601.png"></img>
                        <div className="blog-content">
                            <h2>AI & Automation: The Changing Landscape of Cybersecurity for MSMEs</h2>
                            <p>Artificial intelligence (AI) and automation are transforming the IT ecosystem to create new opportunities and enhance existing business operations.</p>
                            <a href="#" className="blg-btn">Explore more</a>
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>
                    {/* <button className="blog-slider_arrow blog-slider_arrow-left" onClick={handlePrevSlide}>
                        Prev
                    </button>
                    <button className="blog-slider_arrow blog-slider_arrow-right" onClick={handleNextSlide}>
                        Next
                    </button> */}
                </div>
            </div>
        </>
    );
}
export default BlogSlider;