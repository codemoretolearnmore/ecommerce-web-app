const Cart=require('./../models/cartSchema');
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
    add:(req,res,next)=>{
        if(req.skip) return next();
        const userid=req.body.data.user_id,product_id=req.body.data.product_id;
        Cart.findOne({userid:userid})
        .exec((err,result)=>{
            if(err) console.log(err);
            else{
                console.log(result);
                if(result===null){
                    const cart=new Cart({userid:userid,products:[{product_id,count:1}]});
                    cart.save((err,result)=>{
                        if(err) console.log(err);
                        else {
                            console.log(result);
                            console.log('added');
                            res.send({});
                        }
                    })
                }else{
                    if(result.products.length!==0){
                        result.products.forEach((product)=>{
                            // console.log(product);
                            if(product.product_id===product_id){
                                console.log(product);
                                const count=product.count+1;
                                Cart.updateOne({userid:userid,"products.product_id":product_id},{$set:{"products.$.count":count}},function(err,result){
                                    if(err) console.log(err);
                                    else {
                                        console.log(result);
                                        res.send(result);
                                    }
                                })
                            }
                            
                        });
                    }
                    else{
                        Cart.update({userid},{$push:{products:[{product_id,count:1}]}},function(err,result){
                            if(err) console.log(err);
                            else{
                                console.log(result);
                                res.send({});
                            }
                        })
                        
                    }
                }
            }
        })
    },
    view:(req,res,next)=>{
        if(req.skip) return next();
        const userid=req.query.userid;
        Cart.findOne({userid})
        .exec((err,result)=>{
            if(err) console.log(err);
            else {
                const allproducts=[];
                console.log('result',result);
                if(result!==null){
                    result.products.forEach((pr,i)=>{
                        Product.findOne({_id:pr.product_id})
                        .exec((err,d)=>{
                            if(err) console.log(err);
                            else{
                                const obj=JSON.parse(JSON.stringify(d))
                                obj.count=pr.count;
                                allproducts.push(obj);
                                
                                return d;
                            }
                        });
                    });
                }
                
                setTimeout(()=>{
                    console.log(allproducts);
                    res.send(allproducts);
                },1000);
            }
        })
    },
    action:(req,res,next)=>{
        const action=req.body.data.action;
        if(action==="delete"){
            const product_id=req.body.data.product_id,userid=req.body.data.user_id;
            Cart.update({userid:userid},{$pull:{'products':{'product_id':product_id}}},function(err,result){
                if(err) console.log(err);
                else {
                    console.log(result);
                    res.send(result)
                }
            })
        }else if(action==="increase"){
            const userid=req.body.data.user_id,product_id=req.body.data.product_id,count=req.body.data.count;
            Cart.update({userid:userid,"products.product_id":product_id},{$set:{"products.$.count":count}},function(err,result){
                if(err) console.log(err);
                else {
                    console.log(result);
                    res.send(result);
                }
            })
        }else if(action==="decrease"){
            const userid=req.body.data.user_id,product_id=req.body.data.product_id,count=req.body.data.count;
            Cart.update({userid:userid,"products.product_id":product_id},{$set:{"products.$.count":count}},function(err,result){
                if(err) console.log(err);
                else {
                    console.log(result);
                    res.send(result);
                }
            })
        }
    }
}