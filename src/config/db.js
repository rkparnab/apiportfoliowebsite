const mongoose = require("mongoose");

module.exports.databaseConnected=()=>{
      const MONGO_URI = process.env.DB_URL
const option={user:'',pass:'',autoIndex:true}
      mongoose.connect(MONGO_URI, option).then((res)=>{
           console.log('Database connected');
       }).catch((error)=>{
            console.log('Database connection failed');
           
});

}