const Portfolio = require('../model/Portfolio.js');

exports.createPortfolio = async(req,res)=>{

      const portfolio = new Portfolio({...req.body, user:req.user.id});

      await portfolio.save();

      res.status(201).json(portfolio);
};

exports.getAllPortfolios = async(req,res)=>{

      const portfolios = await Portfolio.find({user:req.user.id});

      res.json(portfolios);
};

exports.updatePortfolio = async(req,res)=>{
         
      const {id}= req.params;

      const portfolio = await Portfolio.findByIdAndUpdate( id,req.body,{

      new:true});

      res.json(portfolio);
};

exports.deletePortfolio = async(req,res)=>{

      const {id}= req.params;

  await Portfolio.findByIdAndDelete( id);

      res.json({ message:'Portfolio Deleted'});
};