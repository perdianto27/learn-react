import React, { Component } from 'react';
import Contact from './ObjectState/Contact';
import Company from './ObjectState/Company';

class ObjectState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Boris Ivanov",
            contact: {
                mobile: "6391-330123-3331",
                home: "7713-11923-44041",
                email: "boris.ivanov@filippovich.ru",
                website: ""
            },
            company: {
                name: "Afanasyev Mitrofan Victorovich",
                contact: {
                    mobile: "6391-330444-1134",
                    home: "7713-12513-43341",
                    email: "contact@afanasyevmitrofan.ru",
                    website: "AfanasyevMitrofan.ru"
                }
            }
        };
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){
        let {name, value} = evt.target;
        this.setState((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    }
    handleContactChange(contact){
        this.setState((prevState) => {
            return {
                ...prevState,
                contact: contact
            };
        });
    }
    handleCompanyChange(company){
        this.setState((prevState) => {
            return {
                ...prevState,
                company: company
            };
        });
    }
    render() {
        return <div>
            Name: <input type="text" name="name" 
                onChange={this.handleChange} value={this.state.name} /><br/>
            <h2>Contact</h2>
            <Contact contact={this.state.contact} onChange={this.handleContactChange} />
            <h2>Company</h2>
            <Company company={this.state.company} onChange={this.handleCompanyChange} />
            <div style={{ marginTop: "16px", marginBottom: "16px" }}>
                <textarea readOnly={true} cols={50} 
                    rows={10} value={JSON.stringify(this.state, 0, 2)} />
            </div>
        </div>;
    }
};

export default ObjectState;