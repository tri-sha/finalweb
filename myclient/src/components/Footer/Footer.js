import React from 'react';
import '../home/style.css';
 const Footer = () => {
    return (
    <div className="footer">
		<div className="container">
			<div className="row">
				<div className="footer-col-1">
					<h3>Download Our App</h3>
					<p>Download App for Android and ios mobile phone.</p>
					<div className="app-logo">
                    <img src={`${process.env.PUBLIC_URL}images/play-store.png`} alt="play store"/>
                    <img src={`${process.env.PUBLIC_URL}images/app-store.png`} alt="appstore"/> 
					</div>
				</div>
				<div className="footer-col-2">
                <img src={`${process.env.PUBLIC_URL}images/logo1.png`} alt="E-sahayata" />
					<p>Our Purpose is to Support Everyone Many</p>
				</div>
				<div className="footer-col-3">
					<h3>Useful Links</h3>
					<ul>
						<li>Coupons</li>
						<li>Blog Post</li>
						<li>Return Policy</li>
						<li>Join Our Team</li>
					</ul>
				</div>
				<div className="footer-col-4">
					<h3>Follow Us</h3>
					<ul>
						<li>Facebook</li>
						<li>Twitter</li>
						<li>Instagram</li>
						<li>Youtube</li>
					</ul>
				</div>
			</div>
			<hr/>
			<p className="copyright">Copyright &#169; MCA-JNU-2019 Group-5</p>
		</div>
        </div>
    );
    }

export default Footer;
