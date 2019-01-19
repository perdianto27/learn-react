import React, { Component } from 'react';

class UpdateStateExample extends Component {
  constructor(props){
      super(props);
      this.state = {
          firstName: "Perdianto",
          lastName: "Perdianto",
          address: "Salemba, Jakarta",
          phone: "08980764618",
      };
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt){
    let {name, value} = evt.target;
    this.setState((prev) => ({
        ...prev,
        [name]: value
      }
    ));
  }
  render() {
    let {firstName, lastName, address, phone} = this.state;
    return <>
      <div>
        <span>{firstName}</span>-<span>{lastName}</span>
      </div>
      <div>
      <span>{address}</span>-<span>{phone}</span>
      </div>
      <div>
        <input name="firstName" value={firstName} onChange={this.handleChange} />-
        <input name="lastName" value={lastName} onChange={this.handleChange} />

      </div>
      <div>
      <input name="address" value={address} onChange={this.handleChange} />-
      <input name="phone" value={address} onChange={this.handleChange} />
      </div>
    </>
  }
}

export default UpdateStateExample;
