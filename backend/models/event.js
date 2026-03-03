const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventListSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventAttendees: {
        type: [String],
        required: true
    }
})

const Events = mongoose.model("eventList", eventListSchema, 'eventList');
module.exports = Events;