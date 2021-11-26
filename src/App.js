import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/animations.css';
import Name from './FormElements/Name';
import Email from './FormElements/Email';
import Phone from './FormElements/Phone';
import Day from './FormElements/Day';
import Guests from './FormElements/Guests';
import Message from './FormElements/Message';
import Button from './FormElements/Button';
import PopUp from './FormElements/PopUp';
import Bubbles from './FormElements/Bubbles';


class App extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    day: "",
    guestNumber: "",
    message: "",
    key: 0,
    messageTable: [],
    buttonSubmit: false,
    isPopUpVisible: false,
    flag: true,


    errors: {
      name: false,
      email: false,
      phone: false,
      day: false,
      guestNumber: false,
      correct: false,
    }
  }

  errorText = {
    name: "Invalid name format",
    email: "Invalid email format",
    phone: "Invalid phone format",
    day: "Please choose a date",
    guestNumber: "Pleas select gusets number",
  }
  
  hasError = (value, error) => {
    if (!error && !value && this.state.flag) {
      return "svgIcon"
    } else if (!error && !value && !this.state.flag) {
      return "svgIcon icon-error path"
    } else  {
      return "svgIcon icon-active path"
    }

  }

  printError = (property) => {
    const value = this.state.errors[property]
    if (value === false) {
      let messageTable = []
      this.setState(state => {
        messageTable = state.messageTable.concat(this.errorText[property])
        return {
        messageTable
      }
      })
    } 
  }

  classToggle = () => {
    this.setState(prevState => ({ isPopUpVisible: !prevState.isPopUpVisible }));
  };
    
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(e.target.value, name)
    this.setState({
      [name]: value,
    })
  }

  
  formValidation = () => {
    let name = true;
    let email = true;
    let phone = true;
    let day = true;
    let guestNumber = true;
    let correct = true;

    const regexName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regexPhone = /^\d{9}$/;
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();  

    if (!this.state.name || this.state.name < 2 && this.state.name > 100 && regexName.test(this.state.name) === false) {
      name = false;
    };
    if (!this.state.email || regexEmail.test(this.state.email) === false) {
      email = false;
      
    };
    if (!this.state.phone || regexPhone.test(this.state.phone) === false) {
      phone = false;
    }
    if (!this.state.day) {
      day = false;
    }
    if (!this.state.guestNumber || this.state.guestNumber === 0 || this.state.guestNumber === null) {
      guestNumber = false;
    }
    if (name && email && phone && day && guestNumber) {
      correct = true
    } else {
      correct = false
    }

    return ({
      name,
      email,
      phone,
      day,
      guestNumber,
      correct
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        name: "",
        email: "",
        phone: "",
        day: "",
        guestNumber: "",
        message: "",
        buttonSubmit: true,
        isPopUpVisible: true,
        flag: true,
        errors: {
          name: true,
          email: true,
          phone: true,
          day: true,
          guestNumber: true,
          correct: true,
        },
        messageTable: ["See you soon! Thank you!"],
      
      })
    } else {
      this.setState({
        flag: false,
        isPopUpVisible: true,
        errors: {
          name: validation.name,
          email: validation.email,
          phone: validation.phone,
          day: validation.day,
          guestNumber: validation.guestNumber,
          correct: validation.correct,
        },
        messageTable: [],
      })
      console.log(this.state.errors)
      const formElements = Object.keys(this.state.errors);
      formElements.forEach(element => this.printError(element))
    }
    
  }


  render() {
    const validation = this.formValidation();
    console.log(" render " + this.state.errors.name)
    console.log(validation.name)
    return (
      <React.Fragment>
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <legend className="header">Book your visit!</legend>
          <div className="form-elements">
            <Name class={this.hasError(this.state.name, this.state.errors.name)} name={this.state.name} change={this.handleChange} />
            <Email  class={this.hasError(this.state.email, this.state.errors.email)} email={this.state.email} change={this.handleChange}/>
            <Phone class={this.hasError(this.state.phone, this.state.errors.phone)} phone={this.state.phone} change={this.handleChange} />
            
            <Day class={this.hasError(this.state.day, this.state.errors.day)} day={this.state.day} change={this.handleChange}/>
            <Guests  class={this.hasError(this.state.guestNumber, this.state.errors.guestNumber)} guestNumber={this.state.guestNumber} change={this.handleChange} />
            <Message message={this.state.message} change={this.handleChange}/>
            < Button buttonSubmit={this.state.buttonSubmit} />
          </div>
          
        </form>
        < PopUp messageTable={this.state.messageTable} isPopUpVisible={this.state.isPopUpVisible} classToggle={this.classToggle} />
        </div>
        <Bubbles/>
        </React.Fragment>
    );
  }
}

export default App;
