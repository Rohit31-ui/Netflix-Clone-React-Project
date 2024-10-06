import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParsor from "cookie-parser";
import userRoute from "./routes/userRoute.js";


dotenv.config({
    path: ".env"
})

databaseConnection();
const app = express();
const PORT = 8000;

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(cookieParsor());
app.use(express.json());


//api
app.use("/api/v1/user",userRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})