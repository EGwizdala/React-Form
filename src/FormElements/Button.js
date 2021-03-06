import { ReactComponent as DoneSVG } from '../svg/done.svg';


const Button = (props) => {
    const tickMark = < DoneSVG />;


    return (
        <button className={props.buttonSubmit ? "form-element button button-submit" : "form-element button"}>
        {props.buttonSubmit ? tickMark : "Submit"}
        </button>
    )
}

export default Button;
