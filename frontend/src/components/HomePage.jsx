import { useState, useEffect } from 'react';
import axios from "axios";
import EventsContainer from "./EventsContainer";
import NavBar from "./NavBar";
import EventForm from "./EventForm";
import AttendeeForm from './AttendeeForm';

export default function HomePage(){
    const [targetPage, setTargetPage] = useState("home");
    const [eventList, setEventList] = useState([]);
    const [eventFormResponse, setEventFormResponse] = useState();
    const [newEvent, setNewEvent] = useState({
        name: "",
        date: ""
    });
    const [attendeeList, setAttendeeList] = useState([]);
    const [attendeeFormResponse, setAttendeeFormResponse] = useState();
    const [newAttendee, setNewAttendee] = useState({
        name: "",
        email: "",
        eventName: ""
    });

    useEffect(()=>{
        handleEventDB();
    }, [eventFormResponse])
    useEffect(()=>{
        handleAttendeeDB();
    }, [attendeeFormResponse])
    const createEvent = async (e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/events", newEvent)
            .then((response)=>setEventFormResponse(response.data.message))
            .then(()=>handleResetNewEvent());
        } catch (err) {
            console.log(err.message);
        }
    }
    const handleEventDB = async()=>{
        try{
            const response = await axios.get("http://localhost:3000/events");
            setEventList(response.data);
        }catch(err){
            console.log(err.message);
        }
    }
    const handleResetNewEvent=()=>{
        setNewEvent({
            name: "",
            date: ""
        });
    }
    const changePage = (newPage)=>{
        setTargetPage(newPage);
    }

    const handleOnChangeEvent = (e) => {
        setNewEvent((prevData) => {
        return { ...prevData, [e.target.name]: e.target.value };
        });
    };

    const handleOnSubmitEvent = (e) => {
        e.preventDefault();
        createEvent();
        handleResetNewEvent();
    };


    const createAttendee = async (e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/events", newAttendee)
            .then((response)=>setAttendeeFormResponse(response.data.message))
            .then(()=>handleResetNewAttendee());
        } catch (err) {
            console.log(err.message);
        }
    }
    const handleAttendeeDB = async()=>{
        try{
            const response = await axios.get("http://localhost:3000/attendees");
            setAttendeeList(response.data);
        }catch(err){
            console.log(err.message);
        }
    }
    const handleResetNewAttendee=()=>{
        setNewAttendee({
            name: "",
            email: "",
            eventName: ""
        });
    }

    const handleOnChangeAttendee = (e) => {
        setNewAttendee((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value };
        });
    };

    const handleOnSubmitAttendee = (e) => {
        e.preventDefault();
        createAttendee();
        handleResetNewAttendee();
    };
    return (
        <div>
            <NavBar changePage={changePage} targetPage={targetPage} />
            {targetPage === "home" && <EventsContainer eventList={eventList} />}
            {targetPage === "createEvent" && <EventForm
            handleOnChangeEvent={handleOnChangeEvent}
            handleOnSubmitEvent={handleOnSubmitEvent} />}
            {targetPage === "registerAttendee" && <AttendeeForm
            handleOnChangeAttendee={handleOnChangeAttendee}
            handleOnSubmitAttendee={handleOnSubmitAttendee} />}
        </div>
    );
};