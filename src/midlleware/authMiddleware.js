
const jwt = require('jsonwebtoken');

const User = require('../model/User.js');

exports.authenticate = async(req, res, next)=>{

const token = req.headers['authorization'].split(' ')[1];
console.log(token)
if(!token)return res.status(401).json({message:'No token provided'});

   try{
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      console.log(decoded)
      req.user = await User.findById(decoded.id).lean();

      next();

   }catch(error){
          // console.log(error,"unauthorized")
      return res.status(403).json({message:'Unauthorized'})
   }

};