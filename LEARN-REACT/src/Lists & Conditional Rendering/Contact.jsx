import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      firstName: "",
      lastName: "",
      contactNumber: "",
    };
  }
  addtoContact = () => {
    if (
      this.state.firstName.trim() == "" ||
      this.state.lastName.trim() == "" ||
      this.state.contactNumber.trim() == ""
    ){
      return;
    }
    const newContact = {
      id: Date.now(),
      fname: this.state.firstName,
      lname: this.state.lastName,
      contactNum: this.state.contactNumber,
      visible: false,
    };
    this.setState((prevState) => ({
      contact: [newContact, ...prevState.contact],
      firstName: "",
      lastName: "",
      contactNumber: "",
    }));
    console.log(this.state.firstName);
  };
  onfirstnameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  onlastnameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  oncontactnumberChange = (e) => {
    this.setState({ contactNumber: e.target.value });
  };

  render() {
    const { contact, firstName, lastName, contactNumber } = this.state;
    return (
      <div>
        Enter First Name:{" "}
        <input
          placeholder="Enter First Name"
          value={firstName}
          onChange={this.onfirstnameChange}
        />
        Enter Last Name:{" "}
        <input
          placeholder="Enter Last Name"
          value={lastName}
          onChange={this.onlastnameChange}
        />
        Enter Contact Number:{" "}
        <input
          placeholder="Enter Contact Number"
          value={contactNumber}
          onChange={this.oncontactnumberChange}
        />
        <button onClick={this.addtoContact}>Add</button>
        <ul>
          {contact.map((x) => (
            <li key={x.id}>
              {x.fname} {x.lname}
              {x.contactNum}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contact;
