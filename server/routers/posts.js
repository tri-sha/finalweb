import express from 'express';
import { getUsers,registerUser } from '../controllers/posts.js';
//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);
  
import { validateRegisterUser } from '../validate.js';
const router=express.Router();
//const {
  //  validateUser
  //} = require('../validate.js');

//http://localhost:5000/post
router.post('/',validateRegisterUser,registerUser);
router.get('/',getUsers);

export default router;