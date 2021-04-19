import React,{useState,useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom';
import '../home/style.css';
import {Avatar} from '@material-ui/core';
import {Button,Typography} from '@material-ui/core';
import { LOGOUT } from '../../actions/actiontype';
import {useDispatch} from 'react-redux';
const Header = () => {

	const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const dispatch=useDispatch();
	const history = useHistory();
	const location= useLocation();

	useEffect(() => {
		const token =  user?.token;
		//jwt logic
		setUser(JSON.parse(localStorage.getItem('profile')));
	},[location]);
	
	const logout = () =>{
		dispatch({type: LOGOUT});
		setUser(null);
		history.push('/');
	}

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
						{user?.result ? (
						<li styles={"display:flex"}>
							<ul>
							<li><Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar></li>
							<li><Typography variant="h6">{user?.result.name}</Typography></li>
							<li><Button variant="contained" color="secondary" onClick={logout}>Logout</Button></li>	
							</ul>
						</li>
						) : (
							<li>
							<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
							</li>
						)
						}

						<li>
							<Button component={Link} to="/sell">Sell</Button>
						</li>		

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
