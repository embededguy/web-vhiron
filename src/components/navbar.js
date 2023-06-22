import React from 'react';
import './navbar.css';


function NavBar(){
	return(
		<div className="navbar">
			<div className="navbar-left">
				<div className="navbar-left-content">
	            	<img src="/images/vhiron_logo.png" style={{width:"140px"}}/>
	            </div>
	        </div>
            <div className="navbar-right">
		        <div className="navbar-right-content">
	            	<p> About Us</p>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<p> Services</p>
	            	<div className="dropdown-content">
		                
		            </div>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<p> Portfolio</p>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<p> Careers</p>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<p> Contact Us</p>
	            	<hr/>	            	
	            </div>

		    </div>
		</div>

	);
}

export default NavBar;