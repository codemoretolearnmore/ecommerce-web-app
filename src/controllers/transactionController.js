const Transaction=require('./../models/transactionSchema');
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ecommerce_web",{useNewUrlParser:true,useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);
const db=mongoose.connection;
db.once("open",()=>{
    console.log("connected to database Successfully");

})
module.exports={
    add:(req,res,next)=>{
        if(req.skip) return next();
        console.log('ok');
    }
}