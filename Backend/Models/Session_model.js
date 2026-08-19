const { model, Schema } = require("mongoose");


const Session_model = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "users",
        required: [true, "User is required"]
    },
    refreshTokenHash: {
        type: String,
        required: [true, "Refresh token hash is required"]
    },
    ip: {
        type: String,
        required: [true, "Ip address is required"]
    },
    userAgent: {
        type: String,
        required: [true, "User agent is required"]
    },
    revoked: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
    }
)

module.exports = model("session", Session_model)