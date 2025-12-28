import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
// import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "../routes/transactionsRoute.js";
import job from "./config/cron.js"

dotenv.config();

const app=express()
app.use(express.json());
// app.use(rateLimiter)


if(process.env.NODE_ENV==="production") job.start();

app.get("/health",async (req, res)=>{
    return res.json({success:true,message:"Backend is running"});
})
app.use("/api/transactions",transactionRoute);

const PORT=process.env.PORT || 5001
initDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running on port 5001");
    })
})