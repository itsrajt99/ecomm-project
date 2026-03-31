const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {protect} =require("../middleware/authMiddleWear")

const router = express.Router();

// Register route
//Sign Up api
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: "40h" }
    );

    return res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({ message: "Server Error" });
  }
});

//login api
router.post("/login" , async(req,res)=>{
    const {email,password} =req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"})
        }

        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

      const token = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: "40h" }
    );

    return res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error")
    }
});

//User Profile route
router.get("/profile", protect, async(req,res)=>{
     res.json(req.user)
})


module.exports = router;
