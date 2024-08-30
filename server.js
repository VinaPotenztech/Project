const express=require('express');
const mongoose=require('mongoose');
const authRoutes=require('./routes/authRoutes');
const profileRoute=require('./routes/profileRoutes')
const apiKeyMiddleware = require('./Middleware/apiKeyMiddleware'); // Import the API key middleware
const connectDB=require('./config/db')
const dotenv=require('dotenv');

dotenv.config();
connectDB();

const app=express();
app.use(express.json());

//API Key Middleaware
app.use(apiKeyMiddleware)
//Routes
app.use('/api/auth',authRoutes);
app.use('/profile',profileRoute)

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));