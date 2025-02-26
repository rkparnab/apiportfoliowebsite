const User = require('../model/User.js');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');



exports.registerUser = async(req,res)=>{

      const{ username, password} = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ username,password: hashedPassword});

      await user.save();

      res.status(201).json({message: 'User Registration Successfully'})
};

exports.loginUser = async(req,res)=>{

      const{ username, password} = req.body;

     const user= await User.findOne({username}).lean();
      // console.log(user)
     if(!user || !(await bcrypt.compare(password, user.password))){

      return res.status(401).json({ message: "Invalid Credentials"});
     }

     const token = jwt.sign({id:user?._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
     
          res.json({token})
      //     res.cookie("token", token, { httpOnly: true }).json({ message: "Login successful" });
};
