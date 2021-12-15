const User=require('./../models/userSchema'),
getUserParams=body=>{
    return {name:body.name,email:body.email,password:body.password,loginStatus:false};
};
const bcrypt=require('bcrypt');
const AES = require('crypto-js/aes');
const Utf8 = require('crypto-js/enc-utf8');
const mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
const phrase="yes";
// var User = require('./../models/userSchema');
mongoose.connect("mongodb://localhost:27017/ecommerce_web",{useNewUrlParser:true,useUnifiedTopology: true});
mongoose.set("useCreateIndex", true)
const db=mongoose.connection;
db.once("open",()=>{
    console.log('connected to database successfully');
});

const encryptWithAES=(text,phrase)=>{
    return  AES.encrypt(text,phrase).toString();
}
const decryptWithAES=(text,phrase)=>{
    const bytes=AES.decrypt(text,phrase);
    const originalText=bytes.toString(Utf8);
    return originalText;
}
function generateToken(userid){
    const u={userid};
    return token=jwt.sign(u,"secret",{
        expiresIn:60*60*24
    })
}

module.exports={
    create:(req,res,next)=>{
        if(req.skip) return next();
        User.findOne({email:req.body.data.email})
            .exec((err,doc)=>{
            if(err){
                console.log(err);
                res.send({type:"error",message:"Server Internal error"});
            }else{
                if(doc!==null){
                    res.locals.redirect='/login/'
                    res.send({type:"error",message:"This email is already in use"});
                }else if(doc===null){
                    const data=req.body.data,type="user";
                    if(data.email==="admin@gmail.com")
                    type="admin";
                    var hashedPass=bcrypt.hashSync(data.password,10);
                    const user=new User({name:data.name,email:data.email,password:hashedPass,loginStatus:false,type});
                    user.save((err,result)=>{
                        if(err){
                            console.log(err);
                            res.send({type:"error",message:"server error"});
                            next();
                        }else{
                            console.log(result);
                            res.locals.redirect='/login/'
                            res.send({type:"success",message:"Registration Successful"});
                            next();
                        }
                    })
                }
            }
        }) 
    },
    login:(req,res,next)=>{
        if(req.skip) return next();
        const user=req.body.data;
        const email=user.email,password=user.password;
        User.findOne({email})
        .exec((err,doc)=>{
            if(err){
                console.log(err);
                res.send({message:"server error"});
                // next();
            }else{
                if(doc===null){
                    res.send({message:"USer does not exist"});
                    next();
                }else{
                    if(bcrypt.compareSync(password,doc.password)){
                        var token=generateToken(doc._id);
                        token=encryptWithAES(token,phrase);
                        console.log('user',doc);
                        const user=doc;
                        user.password=undefined;
                        user.loginStatus=undefined;
                        res.send({user,token});
                        console.log(token);
                        next();
                    }
                    else {
                        res.send({message:"Invalid username or password"});
                    }
                }
            }
        });
    },
    getUser:(req,res,next)=>{
        if(req.skip) return next();
        const token=req.body.data.token;
        const userid=decryptWithAES(token,phrase).userid;
        console.log(userid);
        User.findOne({_id:userid})
        .exec((err,user)=>{
            if(err){
                console.log(err);
                res.send({message:"server error"});
            }else{
                console.log(user);
                user.password=undefined;
                user.loginStatus=undefined;
                res.send(user);
            }
        })
    },
    edit:(req,res,next)=>{
        if(req.skip) return next();
        const data=req.body;
        const userid=data.userid,datas=data.data;
        console.log(datas,userid);
        User.updateOne({_id:userid},{name:datas.name},function(err,result){
            if(err) console.log(err);
            else{
                console.log(result);
                res.send(result);
            }
        })
    }
}