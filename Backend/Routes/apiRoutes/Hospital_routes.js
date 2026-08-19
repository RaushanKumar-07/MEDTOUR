const Lift = require("express").Router()
const Add_hospital = require("../../Controllers/Add_hospital")
const Delete_hospital = require("../../Controllers/Delete_hospital")
const Get_hospital_details = require("../../Controllers/Get_hospital_details")
const Update_hospital = require("../../Controllers/Update_hospital")


Lift.get("/getHospital",Get_hospital_details)
Lift.put("/updateHospital/:id",Update_hospital)
Lift.post("/addHospital",Add_hospital)
Lift.delete("/deleteHospital/:id",Delete_hospital)


module.exports = Lift