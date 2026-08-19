const { model, Schema } = require("mongoose");


const Otp_model = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    user: {
        type: Schema.ObjectId,
        ref: "users",
        required: [true, "User is required"]
    },
    otpHash: {
        type: String,
        required: [true, "Otp hash is required"]
    },
},
    {
        timestamps: true,
    }
)

module.exports = model("otps", Otp_model)