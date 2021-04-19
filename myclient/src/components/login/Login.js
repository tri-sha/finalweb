import React,{useState} from 'react'
import '../home/style.css';
import {GoogleLogin} from 'react-google-login';
import Icon from './Icon';
import {Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {register,login} from '../../actions/auth';
import validate from './validate';

const Login= () =>{
    const [formData,setFormData]=useState({firstname:'',lastname:'',email:'',password:'',confirmpassword:''});
    const [isRegister,setIsRegister] = useState(true);
    const [errors,setErrors]=useState({});
    const dispatch = useDispatch();
    const history= useHistory();

    const handlesubmit = (e) =>{
        e.preventDefault();
        if(isRegister){
            //setErrors(validate(formData,"regform"));

            dispatch(register(formData,history));
        }
        else{
            //setErrors(validate(formData,"logform"));
            dispatch(login(formData,history));
        }

    };




    const toogleSigninSignup=()=>{
        setIsRegister((prevIsRegister)=>!prevIsRegister);
    };


    const googleSuccess = (res) =>{
        const result = res?.profileObj;
        const token = res?.tokenId;  
        try{

            dispatch({type : 'AUTH' , data:{result,token} });
            history.push('/');

        }catch(error){
            console.log(error);
        }
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
                    {isRegister && (
                    <>
                    <div className="form-btn">
                    <span>Register</span>
                    </div>
                        <form id="RegForm" onSubmit={handlesubmit}>
						<input type="text" placeholder="FirstName" value={formData.firstname}  onChange={(e) => setFormData({ ...formData,firstname: e.target.value })}/>
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                        <input type="text" placeholder="LastName" value={formData.lastname} onChange={(e) => setFormData({ ...formData,lastname: e.target.value })}/>
						<input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData,email: e.target.value })} />
						{errors.email && <p className="error">{errors.email}</p>}
                        <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData,password: e.target.value })}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                        <input type="password" placeholder=" Confirm Password" value={formData.confirmpassword} onChange={(e) => setFormData({ ...formData,confirmpassword: e.target.value })}/>
						{errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                        <button type="submit" className="btn" >Register</button>
                        <GoogleLogin
                            clientId="359841720219-iovm14lvk5p32chsc3a1gqj59upeutnv.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon/>}
                                variant="contained"
                                fullWidth
                                >Google sign In</Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"

                        />
                        <button onClick={toogleSigninSignup} >Already have an account ? Sign In</button>
					    </form>
                    </> )}
                    {!isRegister && (
                        <>
                    <form id="LoginForm" onSubmit={handlesubmit} >
                    <div className="form-btn">
                    <span>Login</span></div>
						
                        <input type="text" placeholder="Email"  value={formData.email} onChange={(e) => setFormData({ ...formData,email: e.target.value })}/>
						{errors.email && <p className="error">{errors.email}</p>}
                        <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData,password: e.target.value })}/>
						{errors.password && <p className="error">{errors.password}</p>}
                        <button type="submit" className="btn">Login</button>
                        <button onClick={toogleSigninSignup} >Don't have an account ? Register</button>
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
