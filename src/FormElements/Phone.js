import { ReactComponent as PhoneSVG } from '../svg/phone.svg';


const Phone = (props) => {
    return (
    <div >
        <label className="form-element" htmlFor="phone">
            < PhoneSVG className = "svgIcon"/>
            <input type="tel" id="phone" name="phone"  value={props.phone} onChange = {props.change} placeholder="Phone Number" required></input>
        </label>
    </div>
    )
}

export default Phone

