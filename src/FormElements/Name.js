import { ReactComponent as PersonSVG } from '../svg/person.svg';


export const Name = (props) => {
    return (
    <div>
        <label className="form-element" htmlFor="name">
            <PersonSVG className = "svgIcon" />
            <input type="text" id="name" name="name" value={props.name} onChange = {props.change} placeholder="Name" required></input>
        </label>
      </div>
    )
}

export default Name