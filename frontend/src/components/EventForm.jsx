export default function EventForm({handleOnChangeEvent, handleOnSubmitEvent}){
    return (<div>
        <form onSubmit={handleOnSubmitEvent}>
            <input type="text" name="name" id="name" placeholder="event name" onChange={handleOnChangeEvent} />
            <br />
            <input type="date" name="date" id="date" placeholder="event date" onChange={handleOnChangeEvent} />
            <br />
            <button>Submit</button>
        </form>
    </div>)
}