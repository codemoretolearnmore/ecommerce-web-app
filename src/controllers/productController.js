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
    action:(req,res,next)=>{
        if(req.skip) return next();
        const action=req.body.action,product_id=req.body.product_id;
        console.log(action,product_id);
        if(action==="delete"){
            Product.remove({_id:product_id},function(err,result){
                if(err) console.log('error occured ',err);
                else{
                    console.log(result);
                    res.send(result);
                }
            })
        }else if(action==="update"){
            console.log("product id",req.body.product_id);
            console.log(req.body.data);
            const product_id=req.body.product_id,data=req.body.data;
            Product.updateOne({_id:product_id},data,function(err,result){
                if(err) console.log(err);
                else{
                    console.log(result);
                    res.send(result);
                }
            })
        }
    },
    fetch:(req,res,next)=>{
        if(req.skip) return next();
        const type=req.query.type;
        if(type===""){
            Product.find({})
            .exec((err,result)=>{
                if(err){
                    console.log("error occured",err);
                }else{
                    console.log(result);
                    res.send(result);
                }
            })
        }else{
            Product.find({product_category:type})
            .exec((err,products)=>{
                if(err){
                    console.log('error occured',err);
                }else{
                    console.log('products',products);
                    console.log(req.query);
                    res.send(products);
                }
            })
        }
    },
    view:(req,res,next)=>{
        if(req.skip) return next();
        Product.findOne({_id:req.body.data.id})
        .exec((err,product)=>{
            if(err){
                console.log('error occured',err);
            }
            else{
                console.log('product ',product);
                
                res.send(product);
            }
        })
    },
    add:(req,res,next)=>{
        if(req.skip) return next();
        const data=req.body.data;
        console.log('received data',req.body.data);
        const product=new Product(data);
        product.save((err,result)=>{
            if(err){
                console.log('error occured',err);
                res.send({type:"error",message:err});
            }else{
                console.log(result);
                res.send(result);
            }
        })
    }
}