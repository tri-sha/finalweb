import User from '../models/user.js';
import {validationResult,check } from 'express-validator';
//import User from '../models/user.js';

export  const getUsers = async(req,res) => {
    
    try{
        const users = await User.find();
        res.status(200).json(users);

    }
    catch(error){
        res.status(404).json({message: error.message});
    }

}

export const registerUser = async(req,res) => {

    console.log(req.body);
    try{
    const {firstname,lastname,email,password}= req.body;

    //const newuser= new User(newuserdetail);
    //await newuser.save();
    
    User.findOne({email},function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            if(docs==null){
                return res
                .status(400)
                .json({errormessage:"Email unique"});
            }
        }});
    //console.log(existinguser);
    
    //if(!firstname||!password||!email)
      //  return res
       // .status(400)
        //.json({errormessage:"please enter all required fields"});
    
    //const errors = validationResult(req);
     //if (!errors.isEmpty()) {
       //     return res.status(400).json({ errors: errors.array() });
    }

    //else{
    //    
   // }    
      
    //}


    catch(err){
        res.status(500).send();
    }
}

    //const userdetail=req.body();
    //const newUser = new User(userdetail);

    //try{
      //  await newUser.save();
       // res.status(200).json(newUser);
    //}
    //catch(error){
      //  res.status(404).json({message: error.message});

    //}
//}