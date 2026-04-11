import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        const {MONGO_URL} = ENV;
        if(!MONGO_URL){
            throw new Error("Please provide MONGO_URL in the environment variables");
        }
        const conn = await mongoose.connect(MONGO_URL);
        console.log(`MongoDB Connected ✅`);
    } catch (error) {
        console.log(`Error connecting to database: ${error.message}`);
        process.exit(1); //1 status code means fail ,0 means success
     }
}


export default connectDB;