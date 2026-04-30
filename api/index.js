import express from "express";
import { connectDB } from "./helper/dbConnectionFunc.js";
import { ENV } from "./constant/index.js";
import router from "./routes/index.js";

// dotenv.config();
connectDB()

const app = express();
app.use(express.json())
app.use("/api", router)

// const PORT = ENV.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`server is running on the port of ${PORT}`)
// })

module.exports = app;
module.exports.handler = serverless(app);