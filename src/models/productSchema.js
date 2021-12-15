const mongoose=require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
require('mongoose-double')(mongoose);
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    product_category:{
        type:String,
        required:true
    },
    product_url: {
        type: String,
        required: 'Product url is required'
    },
    product_rating:{
        required:true,
        type:mongoose.Schema.Types.Double,
        default:0
    },
    product_price:{
        required:true,
        type:Number
    },
    product_description:{
        required:true,
        type:String
    }
});
module.exports=mongoose.model("Product",productSchema);