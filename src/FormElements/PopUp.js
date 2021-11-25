import React, { Component } from 'react';
import { ReactComponent as CloseSVG } from '../svg/close.svg';


const PopUpMessage = props => <div>{props.text}</div>;


const PopUp = (props) => {
    let key = 0;
    let isPopUpVisible = props.isPopUpVisible;
    const popUpMessage = props.messageTable.map(message => <PopUpMessage key={key++} text={message} />)

    const classToggle = (e) => {
        console.log(isPopUpVisible)
        isPopUpVisible = !isPopUpVisible;
      };
    
    return (
        <div className={!props.isPopUpVisible ? "pop-up hidden" : "pop-up"}>
            <CloseSVG onClick={props.classToggle}/>
          {popUpMessage}
        </div>
     );
}
 
export default PopUp;