import User from "../models/User";
import bcrypt from "bcryptjs";

export const register = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message: "Fields cannot be empty"})
        }
        const existingUser = await User.findOne(email)
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hash = await bcrypt.hash(password,10);

        const user = await User.create({
            email,
            password: hash
        })

        return res.status(200).json({message:"User registered"})

    } catch (error) {
        console.log(error);
        
    }
}

export const login = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}