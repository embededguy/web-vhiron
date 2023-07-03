import './footer.css';
import 'css-doodle';
function Footer(){
	return (
		<footer className="footer-section">
			<div className="footer-container">
				<div className="footer-header">
					<div className="foot-row">
						
						<div className="">
							<div className="single-cta">
								<i className="fa fa-bolt"/>
								<div className="cta-text">
									<h4>Find us</h4>
									<span>1010 Avenue, sw 54321, chandigarh</span>
								</div>
							</div>
						</div>

						<div className="">
							<div className="single-cta">
								<i className="fa fa-phone" />
								<div className="cta-text">
									<h4>Call us</h4>
									<span>+91 92223 07880</span>
								</div>
							</div>
						</div>

						<div className="">
							<div className="single-cta">
								<i className="fa fa-envelope" />
								<div className="cta-text">
									<h4>Mail us</h4>
									<span>office@vhiron.com</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr style={{border:"2px solid #ffffff",borderRadius:"5px",width:"50%"}}/>
				<div className="footer-content">
					<div className="row-footer">
						<div className="" style={{}}>

							<div className="footer-widget">
								<div className="footer-logo-outer">
								<div className="footer-logo">
									<a href="index.html"><img src="images/vhiron_f.png" className="img-fluid" alt="logo" /></a>
								</div>
								</div>
								<div className="footer-text">
									<p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
									elit,Lorem ipsum dolor sit amet.</p>
								</div>
								<div className="footer-social-icon">
									<span>Follow us</span>
									<div>
									<a href="#"><i className="fa fa-linkedin" /></a>
									<a href="#"><i className="fa fa-twitter" /></a>
									<a href="#"><i className="fa fa-instagram" /></a>
									<a href="#"><i className="fa fa-github" /></a>

									</div>
								</div>
							</div>
						</div>

						<div className="fx">
							<div className="footer-widget">
								<div className="footer-widget-heading">
									<h3>Useful Links</h3>
								</div>
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">about</a></li>
									<li><a href="#">services</a></li>
									<li><a href="#">portfolio</a></li>
									<li><a href="#">Contact</a></li>
									<li><a href="#">About us</a></li>
									<li><a href="#">Our Services</a></li>
									<li><a href="#">Expert Team</a></li>
									<li><a href="#">Contact us</a></li>
									<li><a href="#">Latest News</a></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 mb-50">
							<div className="footer-widget">
								<div className="footer-widget-heading">
									<h3>Subscribe</h3>
								</div>
								<div className="footer-text mb-25">
									<p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
								</div>
								<div className="subscribe-form">
									<form action="#">
									<input type="text" placeholder="Email Address" />
										<button><i className="fa fa-envelope" /></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright-area">
				<div className="container">
					<div className="row-x">
						<div className="">
							<div className="copyright-text">
							<p>Copyright © 2023, All Right Reserved Jinshaashan Info LLP</p>
							</div>
						</div>
						<div className="">
							<div className="footer-menu">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Terms</a></li>
									<li><a href="#">Privacy</a></li>
									<li><a href="#">Policy</a></li>
									<li><a href="#">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
      </footer>
	);
}

export default Footer;