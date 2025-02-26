const express =require('express');
const dotenv =require("dotenv");
dotenv.config();
const authRoutes =require('./src/routes/authRoutes.js');

const portfolioRoutes =require('./src/routes/portfolioRoutes.js');

const rateLimit =require('express-rate-limit');
// const path = require("path");
const cors =require('cors');

const cookieParser = require('cookie-parser');

const { databaseConnected } = require('./src/config/db.js');

const app= new express();


databaseConnected()

app.use(cookieParser());
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)



const port = process.env.PORT || 8000

app.set('etag', false);

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);


app.listen(port,()=>{
      console.log("listen port:",port)
})