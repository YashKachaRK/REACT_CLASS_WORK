import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    // list banayvi
    super(props);
    this.state = {
      contact: [],
      firstName: "",
      lastName: "",
      contactNumber: "",
    };
  }
  // add data in list
  addtoContact = () => {
    if (
      // check extra space remove
      this.state.firstName.trim() == "" ||
      this.state.lastName.trim() == "" ||
      this.state.contactNumber.trim() == ""
    ) {
      return;
    }
    // make one varible for input and set list variable
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
  };
  //delete
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contact: prevState.contact.filter((y) => y.id !== id),
    }));
  };
  // iinput fonction
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
              <b>First Name:</b>
              {x.fname} <br />
              <b>Second Name:</b> {x.lname}
              <br />
              <b>Contact Number</b>
              {x.contactNum} <br />
              <button onClick={() => this.deleteContact(x.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contact;
