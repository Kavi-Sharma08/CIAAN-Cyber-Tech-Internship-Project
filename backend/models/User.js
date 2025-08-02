import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String
    },

})

const UserModel = mongoose.model("User " , UserSchema);

export {
    UserModel
}