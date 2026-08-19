require("dotenv").config();
const express = require("express")
const mongoDB = require("mongoose")
const cors = require("cors")
const Routes = require("./Routes/index.js")
const ConnectDB = require("./config/database.js")
const config = require("./config/config.js")
const cookieParser = require("cookie-parser")

//Step-1
const app = express()
console.log("Server is running...")

//Step-2
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(Routes)

//Step-3
const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

//Step-4
ConnectDB();