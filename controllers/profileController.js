const User=require('../models/userModel');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../utils/jwtUtils')

//Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ error: 'Token required' });
  
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });
      req.userId = decoded.userId;
      next();
    });
  };

//@desc View User profile
// @route   GET /profile/view/:id
//@access private
//Token in Header
const viewProfile=async(req,res)=>{
    try {
        const user=await User.findById(req.params.userId)
        if(!user)return res.status(404).json({error:'User not found'});
        res.json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

//@desc Edit User Profile
// @route   PUT /api/login
//@access private /profile/edit
//Token in Header
const editProfile=async(req,res)=>{
    try {
        const {user_id,user_name,email,phone,address}=req.body;
        const user=await User.findById(user_id);

        if(!user)return res.status(404).json({error:'User not found'});
        if(user_id !== req.userId.toString())return res.status(403).json({error:'Forbidden'});

        user.username=user_name || user.username;
        user.email=email||user.email;
        user.phone=phone || user.phone;
        user.address=address||user.address;
        
        await user.save();
        res.json({user_id:user._id,status:'success'});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports={verifyToken,viewProfile,editProfile}