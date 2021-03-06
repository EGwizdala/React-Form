import { ReactComponent as PersonAddSVG } from '../svg/person_add.svg';


const Options = (props) => {
    return (
        <option value={props.number}>{props.number}</option>
    )
}

const Guests = (props) => {
    const guestMaxNbr = 10;
    const guests = Array.from(Array(guestMaxNbr).keys())
    const options = guests.map(guest => {
        return <Options key={guest+1} number={guest+1} />
        })
    return (
    <div className="guest-numbers-container" >
        <label className="guest-numbers" htmlFor="number">
            < PersonAddSVG  className={props.class} />
            <div >Guest number</div>
            <div className="select-wrapper">
                    <select value={props.guestNumber} onChange={props.change} type="select" name="guestNumber" id="guestNumber">
                        <option value="0">0</option>
                        {options}
                </select>
            </div>
        </label>
    </div>
    )
}

export default Guests

