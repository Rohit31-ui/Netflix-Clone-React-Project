import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: ".env"
})


const databaseConnection = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });

}

export default databaseConnection;

