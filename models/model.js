const mongoose =require('mongoose');
const postschema=mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    area :
    {
        type : String,
        required : true
    }
}); 
const p =module.exports =mongoose.model('p',postschema);