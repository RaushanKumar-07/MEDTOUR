require("dotenv").config();
const express = require("express")

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

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
  origin: [
    "http://localhost:5173",
    "https://medtour-peach.vercel.app"
  ],
  credentials: true,
}));
app.use(Routes)

//Step-3
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Step-4
ConnectDB();