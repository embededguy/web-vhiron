import React from 'react';
import './navbar.css';
import { BrowserRouter,Routes, Route, Outlet, Link } from "react-router-dom";


function NavBar(){
	return(
		<>
		<div className="navbar">
			<div className="navbar-left">
				<div className="navbar-left-content">
	            	<img src="/images/vhiron_logo.png" style={{width:"140px"}}/>
	            </div>
	        </div>
            <div className="navbar-right">
            	<div className="navbar-right-content">
	            	<Link to="/">Home</Link>
	            	<hr/>
	            </div>
		        <div className="navbar-right-content">
	            	<Link to="/about">About Us</Link>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<Link to="/">Services</Link>
	            	<div className="dropdown-content">
		                
		            </div>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<Link to="/">Portfolio</Link>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<Link to="/">Careers</Link>
	            	<hr/>
	            </div>
	            <div className="navbar-right-content">
	            	<Link to="/">Contact Us</Link>
	            	<hr/>	            	
	            </div>

		    </div>
            <div id="hambure" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-cpp')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-cpp')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>

		</div>
		<Outlet/>
		</>

	);
}

export default NavBar;