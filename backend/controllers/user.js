import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async(req,res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            });
        }

        // Check if the user exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid ",
                success:false
            });
        }

        
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }

        // Generate token if successful
        const tokenData = { id: user._id };
        const token = await jwt.sign(tokenData, "dfbvdkjzfnvkjzdnfvkzdnjf", { expiresIn: "1h" });

        return res.status(200)
                  .cookie("token", token, { httpOnly: true })
                  .json({
                      message: `Welcome back ${user.fullName}`,
                      user,
                      success: true
                  });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error, please try again later",
            success: false
        });
    }
}

export const Logout = async(req,res) =>{
    return res.status(200).cookie("token","",{expiresIn: new Date(Date.now()),httpOnly:true}).json({
        message:"User logged successfully",
        success:true,
    })
}


export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check for missing fields
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Invalid data",
        success: false,
      });
    }

    // Check if the email already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "This email is already used",
        success: false,
      });
    }

    // Hash password with bcrypt
    const hashedPassword = await bcryptjs.hash(password, 10);
    console.log("Hashed Password:", hashedPassword); // Log the hashed password

    // Create new user
    await User.create({
      fullName,
      email,
      password: hashedPassword, // Store the hashed password
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,  // Add success key
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error, please try again later",
      success: false,
    });
  }
};
