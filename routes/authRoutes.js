const express=require('express');
const {registerUser,loginUser}=require('../controllers/authControllers');
const router=express.Router();
const apiKeyMiddleware = require('../Middleware/apiKeyMiddleware'); // Import the API key middleware

router.use(apiKeyMiddleware)
router.post('/register',registerUser);
router.post('/login',loginUser);

module.exports=router;