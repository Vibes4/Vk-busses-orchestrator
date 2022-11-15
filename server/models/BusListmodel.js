const mongoose = require('mongoose');


const schema = mongoose.Schema;


const BusListSchema = new schema({
    name : {type:String,required:true},
    type : {type:String,required:true},
    from : {type:String,required:true},
    to : {type:String,required:true},
    bus_id : {type:Number,required:true,unique:true},
})



const BusListModel = mongoose.model('bus-list',BusListSchema);



module.exports = BusListModel;