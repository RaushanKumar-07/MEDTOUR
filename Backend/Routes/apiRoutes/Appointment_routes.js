const Lift = require("express").Router()
const Add_appointment = require("../../Controllers/Add_appointment")
const Delete_appointment = require("../../Controllers/Delete_appointment")
const Get_appointment_details = require("../../Controllers/Get_appointment_details")
const Update_appointment = require("../../Controllers/Update_appointment")


Lift.get("/getAppointment",Get_appointment_details)
Lift.put("/updateAppointment/:id",Update_appointment)
Lift.post("/addAppointment",Add_appointment)
Lift.delete("/deleteAppointment/:id",Delete_appointment)


module.exports = Lift