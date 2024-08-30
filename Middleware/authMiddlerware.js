const jwt=require('jsonwebtone')
const {JWT_SECRET}=require('../utils/jwtUtils')

module.exports=(req,res,next)=>{
    const token=req.headers['authorization']?.split('')[1];
    if(!token)return res.status(403).json({error:'Token required'})

    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if(err)return res.status(403).json({error:"Invalid token"});
        req.userId=decoded.userId;
        next();
    })
}