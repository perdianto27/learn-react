import React, { Component } from 'react';
class Contact extends Component {
    render() {
        let { contact, onChange } = this.props;
        let { mobile, home, email, website } = contact;
        let handleChange = (evt) => {
            onChange({
                ...contact,
                [evt.target.name]: evt.target.value
            });
        };
        return <div>
            Mobile: <input type="text" name="mobile" 
                onChange={handleChange} value={mobile} /><br/>
            Home: <input type="text" name="home" 
                onChange={handleChange} value={home} /><br/>
            Email: <input type="text" name="email" 
                onChange={handleChange} value={email} /><br/>
            Website: <input type="text" name="website" 
                onChange={handleChange} value={website} /><br/>
        </div>;
    }
};
export default Contact;