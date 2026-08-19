const Lift = require("express").Router()
const Forget = require("../../Controllers/Forget")
const Signin = require("../../Controllers/Signin")
const Signup = require("../../Controllers/Signup")
const Update_profile = require("../../Controllers/Update_profile")
const Change_password = require("../../Controllers/Change_password")
const Refresh_token = require("../../Controllers/Refresh_token")
const Logout = require("../../Controllers/Logout")
const authMiddleware = require("../../Middleware/authMiddleware")
const Verify_email = require("../../Controllers/Verify_email")


Lift.use("/Signin",Signin)
Lift.use("/Signup",Signup)
Lift.use("/Forget",Forget)
Lift.put("/updateProfile/:id",authMiddleware,Update_profile)
Lift.use("/changePassword",authMiddleware,Change_password)
Lift.get("/refreshToken",Refresh_token)
Lift.get("/Logout",authMiddleware,Logout)
Lift.post("/verifyEmail",Verify_email)


module.exports = Lift