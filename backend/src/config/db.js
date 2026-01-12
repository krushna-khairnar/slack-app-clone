import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
       const conn = await mongoose.connect(ENV.MONGO_URL);
        console.log("Connected to the database successfully : ", conn.connection.host);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with failure
    }
}