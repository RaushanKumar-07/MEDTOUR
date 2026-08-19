const Lift = require("express").Router()
const apiRoutes = require("./apiRoutes/index")

Lift.use("/api",apiRoutes)


module.exports = Lift