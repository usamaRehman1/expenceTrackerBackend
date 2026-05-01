import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import { connectDB } from "./helper/dbConnectionFunc.js";
import { ENV } from "./constant/index.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();
app.use(express.json())

app.get("/", async (req, res) => {
    await connectDB(); // connect when request comes
    res.send("API working ✅");
});

// connectDB()

app.get("/test", (req, res) => {
  res.send("Test route working 🚀");
});


app.use("/", router)

// const PORT = ENV.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`server is running on the port of ${PORT}`)
// })

export default serverless(app);