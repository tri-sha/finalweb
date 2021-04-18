import React from 'react'
import {Link } from 'react-router-dom';
import '../home/style.css';
const Header = () => {

    return (
        <div className="header">
		    <div className="container">
			    <div className="navbar">
				<div className="logo">
                <img src={`${process.env.PUBLIC_URL}images/logo1.png`} alt="E-sahayata"  
					width="125px"/>
				</div>
				<nav>
					<ul id="MenuItems">
						<li><Link to='/'>Home</Link></li>
						<li><a href="http://www.google.com">Products</a></li>
						<li><a href="http://www.google.com">About</a></li>
						<li><a href="http://www.google.com">Contact</a></li>
						<li><Link to='/auth'>Account</Link></li>
					</ul>
				</nav>
                <img src={`${process.env.PUBLIC_URL}images/cart.png`} alt="cart"  
				    width="30px" height="30px"/>
                <img src={`${process.env.PUBLIC_URL}images/menu.png`}  
				alt="menu" className="menu-icon"/>

			</div>
		</div>
	</div>
             );
}

export default Header;
