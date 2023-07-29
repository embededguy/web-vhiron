import React,{useEffect,useState}  from "react";
import './services.css';
import serviceimg from '../services.svg'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import CountUp  from "react-countup";
import linkimg from '../link.svg'


function Services(){
    const years = <CountUp start={0} end={20} duration={4}></CountUp>
    const Actprj = <CountUp start={0} end={15} duration={4}></CountUp>
    const prjdn = <CountUp start={0} end={130} duration={4}></CountUp>
    const stsclt = <CountUp start={0} end={200} duration={4}></CountUp>

    const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <>
            <section class="c-section">
                <div  className="service-title">
                    <Fade left>
                        <h2>Our Services</h2>
                   </Fade>
                    <Fade bottom>
                        <img src={serviceimg}></img>
                   </Fade>
                    </div>
            {/* <div className="orange-fill" style={{ height: `${scrollPercentage}%` }} /> */}
               <div className="c-container" id="firstcntr">
                        <li class="c-services__item" id="UXR">
                        <h3>Web Development</h3>
                        <p>It&rsquo;s important to research deeply for the product you want to build.</p>
                            {/* <a className="link" href={Webpg} target="_blank" rel="noreferrer">
                                <img src={linkimg}></img>
                            </a> */}
                            <Link className="link" to="/web_dev" target="_blank" rel="noreferrer">
                                <img src={linkimg}></img>
                            </Link>
                        </li>
                        <li class="c-services__item" id="ux">
                        <h3>App Development</h3>
                        <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
                            <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                                <img src={linkimg}></img>
                            </a>
                        </li>
                </div>
                <Fade bottom>
                <div className="c-container">
                    <li class="c-services__item" id="fed">
                    <h3>Cloud Computing</h3>
                    <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites.</p>
                        <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                            <img src={linkimg}></img>
                        </a>
                    </li>
                    <li class="c-services__item" id="uxc">
                    <h3>IT Consultation</h3>
                    <p>If you don&rsquo;t know what kind of service to request from us, don&rsquo;t worry. We can help and see what fits your business and your budget.</p>
                        <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                            <img src={linkimg}></img>
                        </a>
                    </li>
                </div>
                </Fade>
                <Fade bottom> 
                <div className="c-container">
                    <li class="c-services__item" id="webd">
                            <h3>Graphics</h3>
                            <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
                        <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                            <img src={linkimg}></img>
                        </a>
                    </li>
                    <li class="c-services__item" id="mad">
                    <h3>Social Media Handling</h3>
                    <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                        <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                            <img src={linkimg}></img>
                        </a>
                    </li>
                </div>
                </Fade>
                <Fade bottom>
            <div className="c-container">
                <li class="c-services__item" id="ls">
                <h3>Lab Setup</h3>
                <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                    <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                        <img src={linkimg}></img>
                    </a>
                </li>
                <li class="c-services__item" id="pm">
                <h3>Project Making</h3>
                <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                    <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                        <img src={linkimg}></img>
                    </a>
                </li>
            </div>
            </Fade>
                <Fade bottom>
                    <div className="c-container">
                <li class="c-services__item" id="bic">
                    <h3>Business IT Consultation</h3>
                    <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                        <a className="link" href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                            <img src={linkimg}></img>
                        </a>
                </li>
                </div>
                </Fade>
                <Fade>
                <div className="counter-outer">
                    <h5>We help our clients solve business problems, increase visibility, and achieve unexpected results</h5>
                    <div className="counter-inner">
                        <div className="counter">
                        <CountUp start={0} end={20} duration={4}></CountUp>
                            <p id="ye">Years Of Experience</p>
                        </div>
                        <div className="counter">
                        <CountUp start={0} end={15} duration={4}></CountUp>
                            <p id="ap">Active Projects</p>
                        </div>
                        <div className="counter">
                        <CountUp start={0} end={130} duration={4}></CountUp>
                            <p id="pd">Projects Done</p>
                        </div>
                        <div className="counter">
                        <CountUp start={0} end={200} duration={4}></CountUp>
                            <p id="sc">Satisfied Clients</p>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="cnt-us">
                    <div className="cnt-txt">
                        <Fade bottom>
                            <h3>Do you have any question?</h3>
                        </Fade>
                        <Fade bottom>
                            <h3>Feel free to contact us</h3>
                        </Fade>
                        <Fade bottom>
                            <button className="cnt-btn" href="/contact.js">Contact Us</button>
                        </Fade>
                    </div>
                </div>
                <br></br>
            </section>
        </>
    )
}
export default Services;