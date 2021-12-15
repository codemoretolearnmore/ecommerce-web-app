const Order=require('./../models/orderSchema');
const Product=require('./../models/productSchema');
getUserParams=body=>{
    return {id:body.id}
}
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ecommerce_web",{useNewUrlParser:true,useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);
const db=mongoose.connection;
db.once("open",()=>{
    console.log("connected to database Successfully");

})
module.exports={
    view:(req,res,next)=>{
        if(req.skip) return next();
        const userid=req.body.userid;
        Order.find({userid},{products:{$slice:-10}},function(err,result){
            if(err) console.log(err);
            else{
                if(result.length===0){
                    res.send([]);
                }else
                res.send(result[0].products);
            }
        })
    }
}