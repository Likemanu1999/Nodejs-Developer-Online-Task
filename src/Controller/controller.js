const PlantModel = require("../Model/model");
const SecondModel = require("../Model/seondModel");

const createPlant =  async (req, res) => {
    try{
        let requestbody  = req.body
        let { roll, shift , brand_SD, device_date, engineer_name, charge_name } = requestbody
        if(!requestbody) {
            return res.status(400).send({ status : false, message: "Invalid request, please provide plant details"})
        }
            let saveplant = await PlantModel.create(requestbody);
            res.status(200).send({ status: true, message:"Plant is create successfully", data:saveplant})

    }
    catch(error){
        console.log(error)
    }
}

const getPlant = async (req,res)=>{
    try{
        let getInfo = await PlantModel.find();
       res.send(getInfo)
    }
    catch(error){
        console.log(error)
    }
}

const createshift =  async (req, res) => {
    try{
        let requestbody  = req.body
        let { item, unit_value , TW_1A, TW_1A_time, TW_1B, TW_1B_time } = requestbody
        if(!requestbody) {
            return res.status(400).send({ status : false, message: "Invalid request, please provide Shift details"})
        }
            let saveshift = await SecondModel.create(requestbody);
            res.status(200).send({ status: true, message:"Shift is create successfully", data:saveshift})

    }
    catch(error){
        console.log(error)
    }
}

const getshift = async (req,res)=>{
    try{
        let getInfo = await SecondModel.find();
       res.send(getInfo)
    }
    catch(error){
        console.log(error)
    }
}
module.exports = { createPlant , getPlant, createshift , getshift}