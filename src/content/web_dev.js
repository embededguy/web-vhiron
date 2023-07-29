import React,{useState,useEffect} from "react";
import './web_dev.css';
import { Tooltip } from 'react-tooltip-lite';
import frontend from '../front-end.png'
import backend from '../web-development.png'
import graphics from '../graphics.jpg'
import ContactFooter from "../components/contactfooter";
import SectionBar from "../components/sectionbar";


function WebDev(){
    const [pushedButton, setPushedButton] = useState(null);
    const [activeContainer, setActiveContainer] = useState(null);
    useEffect(()=>{
        document.getElementById("button1").click();
    },[])
  const handleClick = (buttonId) => {
    if (pushedButton !== buttonId) {
        setPushedButton(buttonId); // Set the state to the clicked button ID
      }      
    setActiveContainer((prevContainerId) => {
      if (prevContainerId === buttonId) {
        return prevContainerId; // Hide the container if the same button is clicked again
      } else {
        return buttonId; // Show the container
      }
    });
  };
    return(
        <>
            <div className="top-container">
                <h2>Web Development</h2>
            </div>
            <SectionBar x={0}/>
            <div className="details">
                <h2>Services Offered</h2>
                <div className="left-ibar">
                    <button title="Frontend Devlopement" id="button1" className={`icon ${pushedButton === 1 ? 'pushed' : ''}`} onClick={() => handleClick(1)}><img src={frontend}></img></button>
                        {pushedButton === 1 && <div className="line" />}
                    <button title="Backend Devlopement" className={`icon ${pushedButton === 2 ? 'pushed' : ''}`} onClick={() => handleClick(2)}><img src={backend}></img></button>
                        {pushedButton === 2 && <div id="sec"  className="line" />}
                    <button title="Web Design" className={`icon ${pushedButton === 3 ? 'pushed' : ''}`} onClick={() => handleClick(3)}><img src={frontend}></img></button>
                        {pushedButton === 3 && <div id="third" className="line" />}
                    <button title="Ui/Ux Design" className={`icon ${pushedButton === 4 ? 'pushed' : ''}`} onClick={() => handleClick(4)}><img src={backend}></img></button>
                        {pushedButton === 4 && <div id="fourth" className="line" />}
                </div>
                <div className="details-container">
                    <div className={`details-txt ${activeContainer === 1 ? 'active' : ''}`} id="frontend">
                                <h2>Frontend Development</h2>
                                <p>Consectetur pariatur eu aute dolore non ad irure duis non ut aliqua laboris. Ut ea do cillum ea dolor Lorem minim.</p>
                                <div className="shape">
                                    {/* <img src={graphics}/> */}
                                </div>
                    </div>
                    <div className={`details-txt ${activeContainer === 2 ? 'active' : ''}`} id="backend">
                                <h2>Backend Development</h2>
                                <p>Consectetur pariatur eu aute dolore non ad irure duis non ut aliqua laboris. Ut ea do cillum ea dolor Lorem minim.</p>
                                <div className="shape">
                                    {/* <img src={graphics}/> */}
                                </div>
                    </div>
                    <div className={`details-txt ${activeContainer === 3 ? 'active' : ''}`} id="webdsgn">
                                <h2>Web Design</h2>
                                <p>Consectetur pariatur eu aute dolore non ad irure duis non ut aliqua laboris. Ut ea do cillum ea dolor Lorem minim.</p>
                                <div className="shape">
                                    {/* <img src={graphics}/> */}
                                </div>
                    </div>
                    <div className={`details-txt ${activeContainer === 4 ? 'active' : ''}`} id="ui">
                                <h2>Ui/Ux design</h2>
                                <p>Consectetur pariatur eu aute dolore non ad irure duis non ut aliqua laboris. Ut ea do cillum ea dolor Lorem minim.</p>
                                <div className="shape">
                                    {/* <img src={graphics}/> */}
                                </div>
                    </div>
                </div>
            </div>
            <br></br>
            <ContactFooter/>
        </>
    );
}

export default WebDev;