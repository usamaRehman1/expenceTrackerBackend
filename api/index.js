import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import { connectDB } from "./helper/dbConnectionFunc.js";
import { ENV } from "./constant/index.js";
import router from "./routes/index.js";

dotenv.config();
connectDB()

const app = express();
app.use(express.json())
app.use("/", router)

// const PORT = ENV.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`server is running on the port of ${PORT}`)
// })

export default serverless(app);