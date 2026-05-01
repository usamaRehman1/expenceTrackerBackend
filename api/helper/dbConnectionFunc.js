import mongoose from "mongoose";
import { ENV } from "../constant/index.js";

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(`${ENV.MONGO_URI}`);
        // const con = await mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@mongooscluster.rbdkvvb.mongodb.net/`);
        console.log(`MongoDB Connected => ${con.connection.host}`)
        // console.log(ENV, "==> ENV")

    } catch (error) {
        console.log("Error =>", error)
        throw error
    }
}
