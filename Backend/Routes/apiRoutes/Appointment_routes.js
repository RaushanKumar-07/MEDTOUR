const Lift = require("express").Router()
const Add_appointment = require("../../Controllers/Add_appointment")
const Delete_appointment = require("../../Controllers/Delete_appointment")
const Get_appointment_details = require("../../Controllers/Get_appointment_details")
const Update_appointment = require("../../Controllers/Update_appointment")
const authmiddlware = require("../../Middleware/authMiddleware")


Lift.get("/getAppointment",authmiddlware,Get_appointment_details)
Lift.put("/updateAppointment/:id",authmiddlware,Update_appointment)
Lift.post("/addAppointment",authmiddlware,Add_appointment)
Lift.delete("/deleteAppointment/:id",authmiddlware,Delete_appointment)


module.exports = Lift