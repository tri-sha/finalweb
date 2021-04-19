import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRouter from './routers/product.js';
import userRouter from './routers/user.js';

const app = express();

//const dotenv = require("dotenv");
//dotenv.config();

app.use(bodyParser.json({limit:"30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended : true}));
app.use(cors());
app.use(express.json());


app.use('/user',userRouter);
app.use('/product',productRouter);

const Connection_URL = 'mongodb://localhost:27017/webdb';
const PORT=process.env.PORT||5005;

//Db connection
mongoose.connect(Connection_URL,{useNewUrlParser : true , useUnifiedTopology:true})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);