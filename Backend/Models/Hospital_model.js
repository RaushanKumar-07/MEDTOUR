const { model, Schema } = require("mongoose");


const Hospital_Model = new Schema({
    name: {
        type: String,
        required: [true, "Doctor name is required"]
    },
    hospitalId: {
        type: String,
        required: [true, "Hospital id is required"]
    },
    city: {
        type: String,
        required: [true, "city is required"],
    },
    treatment: {
        type: String,
        required: [true, "Treatment is required"],
    },
    rating: {
        type: String,
        required: [true, "Rating is required"]
    },
    price: {
        type: String,
        required: [true, "Price is required"]
    },
})

module.exports = model("hospitals", Hospital_Model)