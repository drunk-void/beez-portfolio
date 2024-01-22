import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config({ path:'/Users/infierno/Dev/beez-portfolio/backend/.env' });

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || "").then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/health", (req, res) => {
    res.status(201).json({message: "Connected to Backend here!"});
});