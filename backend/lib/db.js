import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected ✅`);
    } catch (error) {
        console.log(`Error connecting to database: ${error.message}`);
        process.exit(1); //1 status code means fail ,0 means success
     }
}


export default connectDB;