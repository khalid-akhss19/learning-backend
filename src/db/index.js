import mongoose from "mongoose";  //we need monggose to connect to the database
import { DB_NAME } from "../constants.js"; //we need the database name from the constants file to connect to the database


const connectDB = async () => {
    try {
        //we use the await keyword to wait for the connection to be established and store the connection instance in a variable called connectionInstance
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        //if the connection fails, we log the error and exit the process
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB