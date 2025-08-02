import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt"
const LoginSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true , "Email is required"],
        unique : true
    },
    password : {
        type : String,
        required : [true , "password is required"],
    }
})


const LoginModel = new mongoose.model("Login" , LoginSchema);

export {
    LoginModel
}