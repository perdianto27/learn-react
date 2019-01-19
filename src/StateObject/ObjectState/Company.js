import React, { Component } from 'react';
import Contact from './Contact';
class Company extends Component {
    render() {
        let { company, onChange } = this.props;
        let { name, contact } = company;
        let handleChange = (evt) => {
            onChange({
                ...company,
                [evt.target.name]: evt.target.value
            });
        };
        let handleContactChange = (contact) => {
            onChange({
                ...company,
                contact: contact
            });
        }
        return <div>
            Name: <input type="text" name="name" 
                onChange={handleChange} value={name} /><br/>
            <h3>Contact</h3>
            <Contact contact={contact} 
                onChange={handleContactChange}></Contact>
        </div>;
    }
};
export default Company;