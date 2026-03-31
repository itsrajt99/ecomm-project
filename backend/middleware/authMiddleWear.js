const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Middleware
const protect = async(req,res,next)=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
       token = req.headers.authorization.split(" ")[1];
       const decode = jwt.verify(token,process.env.JWT_SECRET); 

       req.user = await User.findById(decode.user.id).select("-password");
       next();
    } catch (error) {
        console.error("Token Verification failed:",error);
        res.status(400).json({message:"Not authorized, token failed"});
    }
  } else{
    res.status(401).json({message:"Not authorized, not token provide"});
  }
}

//Check user is admin
const admin = (req,res,next)=>{
  if(req.user && req.user.role ==="admin"){
    next();
  }
  else{
    res.status(403).json({message:"Not authorized as an admin"})
  }
}

module.exports= {protect,admin}