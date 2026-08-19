const Lift = require("express").Router()
const Login_routes = require("./Login_routes")
const Appointment_routes = require("./Appointment_routes")
const Hospital_routes = require("./Hospital_routes")
const Doctor_routes = require("./Doctor_routes")

Lift.use("/Login_routes",Login_routes)
Lift.use("/Appointment_routes",Appointment_routes)
Lift.use("/Hospital_routes",Hospital_routes)
Lift.use("/Doctor_routes",Doctor_routes)


module.exports = Lift