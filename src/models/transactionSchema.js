const mongoose=require('mongoose');
const subscriberSchema=mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    txn_id: {
        type: String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    txn_status:{
        type:Boolean,
        required:true
    },
    txn_method:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Transactions",subscriberSchema);