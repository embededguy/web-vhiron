import './contentcore.css';
import Fade from 'react-reveal/Fade';

function ContentCore(){
	return(
		<div className="wrapper">
			<Fade top>
		  		<h2 className="headings txt-al-c txt-w-n">Core of Vhiron</h2>
			</Fade>
		  	<p>Spearheading Digital Transformation</p>
		  	<div className="tech-inno-partnership">
			    <div className="homecorenew">
			      	<div className="row">
				        <div className="newloop">
				          <a href="#">
				            <img
				              src="images/tech1-1.png"
				              className=""
				              alt=""
				            />
				          </a>
				        </div>
				        <div className="newloop">
				          <a href="#">
				            <img
				              src="images/tech2-1.png"
				              className=""
				              alt=""
				            />
				          </a>
				        </div>
				        <div className="newloop">
				          <a href="#">
				            <img
				              src="images/tech3-1.png"
				              className=""
				              alt=""
				            />
				          </a>
			        	</div>
			      	</div>
			    </div>
		  	</div>
		</div>
	);
}

export default ContentCore;