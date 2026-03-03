const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendeeListSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    attendeeName: {
        type: String,
        required: true
    }
})

const Attendees = mongoose.model("attendeeList", attendeeListSchema, 'attendeeList');
module.exports = Attendees;