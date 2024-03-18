const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
    roll : {
        type: String
    },
    shift : {
        type: String
    },
    brand_SD : {
        type: String
    },
    device_date : {
        type: String
    },
    engineer_name : {
        type: String
    },
    charge_name : {
        type: String
    },
})
module.exports =  mongoose.model('plant',PlantSchema)