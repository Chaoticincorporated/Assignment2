const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose");// import mongoose
require("dotenv").config(); // import dotenv
const {DB_URL} = process.env;// grab var from the .env file
const cors = require("cors"); //disable default browser security
const Events = require("./models/event");
const Attendees = require("./models/attendee");

mongoose.connect(DB_URL).then(()=>{
    server.listen(port, ()=>{
        console.log(`Database is connect\nServer is listing on ${port}`);
    });
}).catch((error)=> console.log(error.message));

//routes
server.get("/", (request,response)=>{
    response.send("lol");
});

server.get("/events", async(request,response)=>{
    try{
        const eventList = await Events.find();
        response.send(eventList);
    } catch(error){
        console.log("db handler");
        server.status(500).send({message:error.message});
    }
});
server.post("/events", async(request,response)=>{
    const {eventName, eventDate} = request.body;
    const newEvent = new Events({
        id: (await Events.find()).length+1,
        eventName,
        eventDate,
        eventAttendees: [],
    });
    try{
        await newEvent.save();
        response.status(200).send({message: "event added successfully"});
    } catch(error){
        response.status(400).send({message:error.message});
    }
});