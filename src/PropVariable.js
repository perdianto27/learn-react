import React, { Component } from 'react';

class PropsDisplay extends Component {
  render() {
    let { 
        firstName,
        lastName,
        birth,

        mobiles,
        educations,
        experiences
    } = this.props;
    return <div>
        <div>
            {firstName} {lastName}
        </div>
        <div>
            {birth}
        </div>
        <div>
            <h2>Mobiles:</h2>
            { mobiles.map((k, index) => {
                return <>
                    <span key={index}>{k}</span><br/>
                </>
            }) }
        </div>
        <div>
            <h2>Educations:</h2>
            { educations.map((k, index) => {
                return <div key={index}>
                    { k.place }, graduate { k.year }
                </div>
            }) }
        </div>
        <div>
            <h2>Experiences:</h2>
            { experiences.map((k, index) => {
                return <div key={index}>
                    <div>
                        { k.place } as { k.title }
                    </div>
                    <div>
                        { k.description }
                    </div>
                </div>
            }) }
        </div>
    </div>;
  }
};

class PropVariable extends Component {
    render(){
        let mobiles = [
            "089-8076-4618",
            "089-8076-4618"
        ];
        let educations = [
            {place: "Jakarta", year: "2014"},
            {place: "Jakarta", year: "2014"},
        ];
        let experiences = [
            {place: "Deli", title: "Jr. Developer", description: "Develop program"}
        ];
        return <PropsDisplay 
            firstName={"Perdianto"}
            lastName={"Perdianto"}
            birth={"1996-03-27"}
            mobiles={mobiles}
            educations={educations}
            experiences={experiences}
         />
    }
};

export default PropVariable;