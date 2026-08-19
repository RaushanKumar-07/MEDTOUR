const Lift = require("express").Router()
const Add_hospital = require("../../Controllers/Add_hospital")
const Delete_hospital = require("../../Controllers/Delete_hospital")
const Get_hospital_details = require("../../Controllers/Get_hospital_details")
const Update_hospital = require("../../Controllers/Update_hospital")
const authMiddleware = require("../../Middleware/authMiddleware")


Lift.get("/getHospital",authMiddleware,Get_hospital_details)
Lift.put("/updateHospital/:id",authMiddleware,Update_hospital)
Lift.post("/addHospital",authMiddleware,Add_hospital)
Lift.delete("/deleteHospital/:id",authMiddleware,Delete_hospital)


module.exports = Lift