import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const register = async(req,res)=>{
    const {firstname,lastname,email,password,confirmpassword} = req.body;
    console.log(firstname);
    // we can do a validation here
    try{
        console.log(email);
        const existinguser = await User.findOne({email});
        console.log(existinguser);
        if(existinguser) return res.status(400).json({message:"User already exists"});

        if(password!=confirmpassword)
            return res.status(400).json({message:"Password doesn't match"});    
          
        const hashedpassword = await bcrypt.hash(password,12);
        const result = await User.create({email,password: hashedpassword,name:`${firstname} ${lastname}`});
        const token=jwt.sign({email:result.email,id:result._id},'test' , {'expiresIn': "1h"});
        res.status(200).json({result,token});
    }
    catch(error){
        res.status(500).json({message:"something went wrong"});
    }

}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const existinguser = await User.findOne({email});

        if(!existinguser) return res.status(400).json({message:"User doesn't exist"});

        const isPasswordCorrect=bcrypt.compare(existinguser.password,password);

        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid credentials"});

        const token=jwt.sign({email:existinguser.email,id:existinguser._id},'test' , {'expiresIn': "1h"});

        res.status(200).json({result:existinguser,token});
    }

    catch(error){
        res.status(500).json({message:"something went wrong"});
    }
    
}
