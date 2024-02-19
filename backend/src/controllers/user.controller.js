import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const testingController = async (req, res, next) => {
    res.status(200).json({ message: "Hello" })
}

const registerUser = async (req, res, next) => {
    try {
        const { name, phoneNo, emailId, location, age, password } = req.body;
        console.log("hello")

        // check user exist karta h ya nhi
        const exist = await User.findOne({ emailId });
        if (exist) {
            throw new Error("user already exists")
        }

        // have to hash the password before saving user in db
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User(
            { age, emailId, location, name, password: hash, phoneNo }
        )

        const user = await newUser.save();
        if (!user) {
            throw new Error("something went wrong while registering a user");
        }

        return res.status(200).json(user._doc);


    } catch (error) {
        res.status(500).json(error.message || "Internal Server error")
    }

}

const loginUser = async (req, res, next) => {
    try {
        const { emailId, password } = req.body;
        console.log("check")

        // find user if existed or not if not then need to register first
        const user = await User.findOne({ emailId });
        if (!user) {
            throw new Error("User not registered.")
        }

        // check if user entered password is equal to saved one or not
        const savedPass = user.password;

        const check = await bcrypt.compare(password, savedPass);
        if (!check) {
            throw new Error("wrong credentials");
        }

        // token generata
        const token = await jwt.sign({ userId: user._id }, "anconsoncoe");
        return res.status(200).cookie("accessToken", token).json({ ...user, password: null })

    } catch (error) {
        res.status(error.status || 500).json(error.message || "Internal Server Error")
    }
}

export { testingController, registerUser, loginUser }