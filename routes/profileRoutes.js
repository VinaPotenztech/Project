const express=require('express');
const { viewProfile, editProfile, verifyToken } = require('../controllers/profileController');
const router=express.Router();
const apiKeyMiddleware = require('../Middleware/apiKeyMiddleware'); // Import the API key middleware

router.use(apiKeyMiddleware)
router.get('/view/:userId',verifyToken,viewProfile);
router.put('/edit',verifyToken,editProfile);

module.exports=router;