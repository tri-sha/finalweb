import Product from '../models/product.js';

export const getProduct= async(req,res)=> {

    try{
        const products = await Product.find();
        res.status(200).json(products);

    }
    catch(error){
        res.status(404).json({message: error.message});
    }

}


export const postProduct = async(req,res)=>{
    const newproduct = req.body;
    const product = new Product(newproduct);
    await product.save();

}
