const mongoose=require('mongoose');
var User = require('./../models/userSchema');
mongoose.connect("mongodb://localhost:27017/groupchat",{useNewUrlParser:true});
const db=mongoose.connection;
db.once("open",()=>{
    console.log('connected to database successfully');
});
