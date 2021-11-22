import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Name from './FormElements/Name';
import Email from './FormElements/Email';
import Phone from './FormElements/Phone';
import Day from './FormElements/Day';
import Guests from './FormElements/Guests';
import Message from './FormElements/Message';
import PopUp from './FormElements/PopUp';


class App extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    day: "",
    guestNumber: "",
    message: "How can we help you?",
    key: 0,
    messageTable: [],

    errors: {
      name: true,
      email: true,
      phone: true,
      day: true,
      guestNumber: true,
      correct: true,
    }
  }

  errorText = {
    name: "Invalid name format",
    email: "Invalid email format",
    phone: "Invalid phone format",
    day: "Please choose a date",
    guestNumber: "Pleas select gusets number",
  }
  
  printError = (property) => {
    const value = this.state.errors[property]
    
    if (value === false) {
      console.log(this.errorText[property])
      let messageTable = []
      this.setState(state => {
        messageTable = state.messageTable.concat(this.errorText[property])
        return {
        messageTable
      }
      })
    } 
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value)
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
    const today = new Date;
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();  

    if (!this.state.name || this.state.name < 2 && this.state.name > 100 && regexName.test(this.state.name) === false) {
      name = false;
    };
    if (!this.state.email || regexEmail.test(this.state.email) === false) {
      email = false;
      
    };
    if (!this.state.phone || regexPhone.test(this.state.phone) === false) {
      phone = false;
    }
    if (!this.state.day || this.state.day > date) {
      day = false;
    }
    if (this.state.guestNumber == 0 || this.state.guestNumber === null) {
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
    console.log(validation.name)
    if (validation.correct) {
      this.setState({
        name: "",
        emial: "",
        phone: "",
        day: "",
        guestNumber: "",
        message: "",
        errors: {
          name: true,
          emial: true,
          phone: true,
          day: true,
          guestNumber: true,
          correct: true,
        },
        messageTable: ["your reservation has been sent thank you!"],
      
      })
    } else {
      
      this.setState({
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
      const formElements = Object.keys(this.state.errors);
      formElements.forEach(element => this.printError(element))
    }
    
  }


  componentDidUpdate() {
    if (this.state.errors.correct) {
      setTimeout(() => this.setState({
        messageTable: []
      }), 10000)
    }
  }

  render() {
    
    const popUpMessage = this.state.messageTable.map(message => <PopUp key={this.state.key++} text={message}/>)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <legend className="header">Book your visit!</legend>
          <div className="form-elements">
          <Name  name={this.state.name} change={this.handleChange} />
            <Email  email={this.state.email} change={this.handleChange}/>
            <Phone  phone={this.state.phone} change={this.handleChange}/>
            <Day day={this.state.day} change={this.handleChange}/>
            <Guests  guestNumber={this.state.guests} change={this.handleChange} />
            <Message message={this.state.message} change={this.handleChange}/>
            <button className="form-element button">Submit</button>
          </div>
          <div className="pop-up">{popUpMessage}</div>
        </form>
      </div>
    );
  }
}

export default App;
