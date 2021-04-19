import React from 'react'

const validate = (formData,formid) =>{
    let errors={};
    if(formid==="regform"){
        if(!formData.firstname){
            errors.firstname="Firstname is required.";
        }
        if(!formData.password){
            errors.password="password required";
        }
        else if(formData.password.length<5){
            errors.password("Password must be at least 5 character")
        }

        if(!formData.confirmpassword){
            errors.confirmpassword="confirm password is required";
        }

        if(!formData.email){
            errors.email="Email is required";
        }
       // else if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(formData.email)) {
         //   errors.email="Invalid Email";
        //}
        
    }

    if(formid==="loginform"){
        if(!formData.password){
            errors.password="password required";
        }
        if(!formData.email){
            errors.email="Email is required";
        }
    }
    return errors; 
}

export default validate;

