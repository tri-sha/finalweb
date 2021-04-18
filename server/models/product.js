import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    creatoremail:{ type: String, required:true},
    productname: { type: String, required:true},
    price:{type: Number,required:true},
    selectedfile:{type:String,required:true},
    free:{type:Boolean,default:true,required:true},
    location:{type:String,required:true},
    createdAt:{ type: Date,default: new Date()}

});

const Product = mongoose.model('product',productSchema);
export default Product;