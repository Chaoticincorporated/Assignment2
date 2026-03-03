export default function NavBar({changePage, targetPage}){
    return (<div>
        {targetPage != "home" && <button onClick={()=>changePage("home")}>Home</button>}
        {targetPage != "createEvent" && <button onClick={()=>changePage("createEvent")}>Create Event</button>}
        {targetPage != "registerAttendee" && <button onClick={()=>changePage("registerAttendee")}>Register Attendee</button>}
    </div>)
};