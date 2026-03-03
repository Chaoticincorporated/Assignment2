import EventCard from "./EventCard";
export default function EventsContainer({eventList}){
    return (<div>
        <h2>Events</h2>
            {eventList.length > 0 ? 
                eventList.map((event) => (
                    <EventCard key={event.id} eventName={event.eventName} {...event}/>
                ))
             : (
                <h3>No events listed</h3>
            )}
    </div>)
}