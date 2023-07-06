import './contentzoom.css';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Jello from 'react-reveal/Jello';
import bg from "../vhiron-transparent.svg"

function ContentZoom(){
    return(
        <>
            <div>
                <div className="panel-1">
                    <img src={bg}/>                    
                </div>
                <div className="panel-2">
                    <img src="vhiron-panel.jpg"/>              
                </div>
            </div>
        </>
    );
}

export default ContentZoom;
