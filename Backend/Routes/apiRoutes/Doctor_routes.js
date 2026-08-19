const Lift = require("express").Router()
const Add_doctor = require("../../Controllers/Add_doctor")
const Delete_doctor = require("../../Controllers/Delete_doctor")
const Get_doctor_details = require("../../Controllers/Get_doctor_details")
const Update_doctor = require("../../Controllers/Update_doctor")


Lift.get("/getDoctor",Get_doctor_details)
Lift.put("/updateDoctor/:id",Update_doctor)
Lift.post("/addDoctor",Add_doctor)
Lift.delete("/deleteDoctor/:id",Delete_doctor)


module.exports = Lift