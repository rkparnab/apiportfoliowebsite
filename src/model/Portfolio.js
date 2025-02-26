const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({

title:{type:String, required:true},

description:{type:String, required:true},

img:{type:String, required:true},

codelink:{type:String, required:true},

livelink:{type:String, required:true},

user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
},
    {  timestamps:true,
       versionKey:false,
        
   }
);

module.exports = mongoose.model('portfolios', portfolioSchema);