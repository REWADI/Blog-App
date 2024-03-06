import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Mongo DB connected on port ${process.env.PORT} and instance is MONGO-DB HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error: ", error);
    }
}; 

export default connectDB;
