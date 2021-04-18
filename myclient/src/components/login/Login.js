import React,{useState} from 'react'
import '../home/style.css';
import {GoogleLogin} from 'react-google-login';

const Login= () =>{
    const [isSignup,setIsSignup] = useState(true);
    const handlesubmit= () =>{

    };

    const handlechange= () => {

    };

    const toogleSigninSignup=()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup);
    };


    const googleSuccess = (res) =>{
        console.log(res);
    };
    const googleFailure = (error) =>{
            console.log(error);
            console.log("failed google login");
    };
    return (
	<div className="container">
<div className="account-page">
	<div className="container">
		<div className="row">
			<div className="col-2">
				<img src={`${process.env.PUBLIC_URL}images/image1.jpg`} alt=""  width="100%"/>
			</div>

			<div className="col-2">
				<div className="form-container">
                    {isSignup && (
                    <>
                    <div className="form-btn">
                    <span>Register</span>
                    </div>
                        <form id="RegForm">
						<input type="text" placeholder="FirstName" handleChange={handlechange}/>
                        <input type="text" placeholder="LastName" handleChange={handlechange}/>
						<input type="email" placeholder="Email" handleChange={handlechange}/>
						<input type="password" placeholder="Password" handleChange={handlechange}/>
                        <input type="password" placeholder=" Confirm Password" handleChange={handlechange}/>
						<button type="submit" className="btn" onSubmit={handlesubmit()}>Register</button>
                        <GoogleLogin
                            clientId="359841720219-iovm14lvk5p32chsc3a1gqj59upeutnv.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button className="btn" 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                variant="contained">Google sign In</button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"

                        />
                        <button onClick={toogleSigninSignup} >Already have an account ? Sign In</button>
					    </form>
                    </> )}
                    {!isSignup && (
                        <>
                    <form id="LoginForm">
                    <div className="form-btn">
                    <span>Login</span></div>
						<input type="text" placeholder="Email" handleChange={handlechange}/>
						<input type="password" placeholder="Password" handleChange={handlechange}/>
						<button type="submit" className="btn" onSubmit={handlesubmit()} >Login</button>
                        <button onclick={toogleSigninSignup} >Don't have an account ? Register</button>
					</form>
                    </> )}
					
				</div>
            </div>
        </div>
    </div>
    </div>
            </div>
            );
        }

export default Login;
