import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstname:{ type: String, required:true},
    lastname: { type: String, required:true},
    password: { type: String, required:true},
    email: { type: String, required:true},
    phone: { type: Number, required:false},
    createdAt:{ type: Date,default: new Date()}

});

const User = mongoose.model('user',userSchema);
export default User;