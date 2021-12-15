const mongoose=require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
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
module.exports=mongoose.model("Carts",subscriberSchema);