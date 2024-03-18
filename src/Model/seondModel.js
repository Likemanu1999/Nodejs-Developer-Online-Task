const mongoose = require("mongoose");

const PlantSecondSchema = new mongoose.Schema({
    item : {
        type: String
    },
    unit_value : {
        type: String
    },
    TW_1A : {
        type: String
    },
    TW_1A_time : {
        type: String
    },
    TW_1B : {
        type: String
    },
    TW_1B_time : {
        type: String
    },
})
module.exports =  mongoose.model('PlantSecond',PlantSecondSchema)