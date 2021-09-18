const mongoose = require("mongoose");
const PiratesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a name."],
        minLength:[3, "Needs to be at least 3 characters long."]
    },
    imgURL: {
        type: String,
        required: [true, "Must have a Image URL."],
        minLength: [5, "Not correct length Image URL"]
    },
    numChests:{
        type: Number,
        required: [true, "Number of chests is required."],
        minLength: [1, "Must have at least one chest"]
    },
    phrase: {
        type: String,
        required: [true, "Must have a pirate catch phrase."],
        minLength: [3, "Catch phrase needs to be at least 3 characters long."]
    },
    position: {
        type: String,
        required: [true, "Position needs to be selected."],
        enum: ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Please choose."]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Please choose."]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Please choose"]
    }

})
const Pirates = mongoose.model("Pirates",PiratesSchema)
module.exports = Pirates;