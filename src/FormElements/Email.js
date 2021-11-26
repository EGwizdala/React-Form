
import { ReactComponent as EmailSVG } from '../svg/email.svg';

const Email = (props) => {
    return (
    <div >
        <label className="form-element" htmlFor="email">
            < EmailSVG className={props.class}/>
            <input type="email" id="email" name="email" value={props.email} onChange = {props.change} placeholder="Email" required></input>
        </label>
    </div>
    )
}



export default  Email

