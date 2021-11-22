export const Message = (props) => {
    return (
    <div className="message" >
        <label htmlFor="message">
            <div>Save us a message:</div>
            <textarea type="text" id="message" name="message" value={props.message} onChange = {props.change}></textarea>
        </label>
      </div>
    )
}

export default Message