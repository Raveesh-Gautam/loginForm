import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
    },
    emailId: { type: String, unique: true, required: true },
    location: String,
    age: Number,
    password: {
        type: String, minLength: 3, required: true, description: "Password min length 3",
    }
})
export const User = mongoose.model('user', UserSchema);