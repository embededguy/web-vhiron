import React, {useEffect,useState} from "react";
// import {ScrollingColorBackground} from 'react-scrolling-color-background';
// import {CSSTransition} from 'react-transition-group';
// import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './careers.css'
import ScrollAnimation from "react-animate-on-scroll";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay,Pagination,Navigation } from "swiper";
import arrow from '../curve-arrow-pointing-left.png'
// import imx from "../video-editing.jpg"
// import AutoplaySlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';

// import Swiper from "swiper";
// import './owl.css';  
// import { useState,useEffect } from "react";

var ScrollingColorBackground = require("react-scrolling-color-background")

    function Careers(){
        const [bgColor, setBgColor] = useState('rgba(255, 255, 255)');
        const [scrollPosition, setScrollPosition] = useState(0);
        const Web = <h4>Web Devlopement</h4>
        const Vedit = <h4>Video Editing</h4>
        const IOT = <h4>IOT</h4>
        const Graphics = <h4>Graphic design</h4>
        const lorem = <p>Veniam veniam commodo ad amet irure ad incididunt consectetur do proident aliquip adipisicing id. Pariatur velit sint aliqua elit. Labore officia nostrud nulla minim id consequat dolor pariatur. In nostrud ipsum cupidatat commodo. Sint ut pariatur excepteur culpa consequat ad et nisi voluptate labore enim.</p>
        const btn = <button>Apply</button>
        const [isHovered, setIsHovered] = useState(false);
        const [isHidden, setIsHidden] = useState(false);
        // const [isVisible, setIsVisible] = useState(true);

        const handleHover = () => {
            setIsHovered(true);
        };

        // const handleLeave = () => {
        //     setIsHovered(false);
        // };

        const handleTransitionEnd = () => {
            setIsHidden(true);
          };
        
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = currentPosition / maxScroll;
            const redValue = Math.floor(scrollPercentage * 255);
            const color = `rgba(${redValue}, 255, 255, 1)`;
            setScrollPosition(currentPosition);
            setBgColor(color);
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const calculateBackgroundColor = () => {
        const scrollWidth = document.documentElement.scrollWidth;
        const clientWidth = document.documentElement.clientWidth;
        const percentage = (scrollPosition / (scrollWidth - clientWidth)) * 100;
    
        const red = 0;
        const green = 0;
        // const blue = '#0987D8'
        const blue = Math.round((255 * percentage) / 100);
    
        return `rgb(${red}, ${green}, ${blue})`;
      };
  
      const bgStyle = {
        background: `linear-gradient(to right, ${bgColor}, #0000FF)`,
        transition: 'background 0.5s ease-in-out',
      };

    return(
        <>
        <div className="outer-container">
            <div className="inner-container">
                <h2>Internships for <br/>students</h2>
            </div>
        </div>
        {/* <CSSTransition nodeRef={nodeRef} in={inProp} setInProp={true} timeout={200} classNames="my-node"> */}
        {/* <ScrollingColorBackground
            selector='.text-info[data-background-color]'
            colorDataAttribute='data-background-color'
            initialRgb='rgb(250,250,250)'
        > */}
        <div className="outer">
        <div className="text-info" style={{ background:'#0987D8'}}>
            <ScrollAnimation delay={400} animateIn="fadeIn">
            <h3>Real-World Experience for Career Success</h3>
            <p>We offer real-world experience, showing you just what it’s like to work at the highest-level, accelerating the progression of your career, and setting you up for success. As a student intern, the knowledge and skills you’ve gained during your studies will come to life.</p>
            <p>As an intern with us, you’ll:</p>
            <ol>
                <li>Have a big impact. You’ll own your project start to finish - diving deep into products, services and programs that will impact millions of customers.</li>
                <li>Gain skills. Through formalized training and hands on learning, you’ll analyze data, problem solve and design solutions with the customer at the center.</li>
                <li>Build a network. From day-to-day to special events, you’ll have the chance to link up with peers globally.</li>
                <li>Receive a mentor. Your manager pairs you with a mentor who will support and coach you throughout your internship - providing valuable feedback to ensure success.</li>
            </ol>
            <p>Our internships are for student pursuing fyjc to Master's degree,MBA & PhD</p>
            <br></br>
            </ScrollAnimation>
        </div>
        <br/>
        <h2 className="caraousel-head">We offer internship in</h2>
        <div className="caraousel">
            <Swiper
                slidesPerView={2}
                loop={true}
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }} 
                pagination={{
                    el:'swiper-pagination',
                    clickable: true
                }}
                  modules={[Autoplay, Pagination]}
                className="myswiper"
                > 
                <SwiperSlide>
                    <div className="outline"> 
                        <div class="book">
                            <div className="description">
                            <p>Lorem consectetur sint dolore ut. Aliquip est incididunt anim consequat aute. Excepteur deserunt nisi adipisicing ea nisi eiusmod consequat exercitation sint deserunt aliqua.</p>
                            </div>
                            <button type="submit">Apply</button>
                            <div class="cover" id="web">
                                {Web}
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 

                <SwiperSlide>
                    <div className="outline"> 
                        <div class="book">
                            <div className="description">
                                <p>Lorem consectetur sint dolore ut. Aliquip est incididunt anim consequat aute. Excepteur deserunt nisi adipisicing ea nisi eiusmod consequat exercitation sint deserunt aliqua.</p>
                            </div>
                            <button type="submit">Apply</button>
                            <div class="cover" id="iot">
                                {IOT}
                            </div>
                        </div>
                    </div>
                 </SwiperSlide>

                <SwiperSlide> 
                    <div className="outline"> 
                        <div class="book">
                            <div className="description">
                                <p>Lorem consectetur sint dolore ut. Aliquip est incididunt anim consequat aute. Excepteur deserunt nisi adipisicing ea nisi eiusmod consequat exercitation sint deserunt aliqua.</p>
                            </div>
                            <button type="submit">Apply</button>
                            <div class="cover" id="graphics">
                                {Graphics}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="outline"> 
                        <div class="book">
                            <div className="description">
                            <p>Lorem consectetur sint dolore ut. Aliquip est incididunt anim consequat aute. Excepteur deserunt nisi adipisicing ea nisi eiusmod consequat exercitation sint deserunt aliqua.</p>
                            </div>
                            <button type="submit">Apply</button>
                            <div class="cover" id="video">
                                {Vedit}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="input-group">
            {/* <input type="email" class="input" id="Email" name="Email" placeholder="Email"></input> */}
            <input className="input" placeholder="Email"></input>
            <button className='send' type="submit">Send</button>
            <img className="arrow" src={arrow}></img>
        </div>
        </div>
        <br/>
        </>
    );
}

export default Careers;