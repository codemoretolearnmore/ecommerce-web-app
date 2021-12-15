const mongoose=require('mongoose');
const subscriberSchema=mongoose.Schema({
    name:String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [
            async function(email) {
              const user = await this.constructor.findOne({ email });
              if(user) {
                if(this.id === user.id) {
                  return true;
                }
                return false;
              }
              return true;
            },
            'The specified email address is already in use.'
        ]
    },
    password:{
        required:true,
        type:String
    },
    type:{
      required:true,
      type:String,
      default:"user"
    },
    loginStatus:Boolean
});
module.exports=mongoose.model("User",subscriberSchema);