
import express from 'express';
import dotenv from 'dotenv';

import noteRoutes from './routes/noteRoutes.js'
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'

// import express from 'express'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors({
    origin : "http://localhost:5174",
}));

app.use(express.json()); // this middleware will parse JSON bodies: req.body

//simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & URL is ${req.url}`);
//     next();
// })
app.use(rateLimiter)

app.use('/api/notes', noteRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server started on PORT:${PORT} `);
});
})



// mongodb+srv://aryaravi2022:g2GvDCwgt8JBuk9V@cluster0.0saihtb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0