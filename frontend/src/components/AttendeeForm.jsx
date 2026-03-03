export default function AttendeeForm({handleOnChangeAttendee, handleOnSubmitAttendee}){
    return (<div>
        <form onSubmit={handleOnSubmitAttendee}>
            <input type="text" name="name" id="name" placeholder="attendee name" onChange={handleOnChangeAttendee} />
            <br />
            <input type="email" name="email" id="email" placeholder="attendee email" onChange={handleOnChangeAttendee} />
            <br />
            <input type="text" name="eventName" id="eventName" placeholder="event name" onChange={handleOnChangeAttendee} />
            <br />
            <button>Submit</button>
        </form>
    </div>)
}