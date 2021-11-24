import { ReactComponent as CalendarSVG } from '../svg/calendar.svg';

const Day = (props) => {
    return (
    <div >
        <label className="form-element" htmlFor="day">
            < CalendarSVG  className={props.day ? "svgIcon icon-active path": "svgIcon"} />
           {props.day ? <div className="date">{props.day}</div> : <div className="date">dd-mm-yyyy</div>} 
            <input className = "datepicker-input" type="date" id="day" name="day" value={props.day} onChange = {props.change} placeholder="Date" required></input>
        
            </label>
    </div>
    )
}

 export default Day

