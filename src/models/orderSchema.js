const mongoose=require('mongoose');
const subscriberSchema=mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    products:{
        type:Array,
        default:[{}]
    }
});
module.exports=mongoose.model("Orders",subscriberSchema);