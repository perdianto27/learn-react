import React, { Component } from 'react';

class PropsDisplay extends Component {
  render() {
    let { name, age, birth } = this.props;
    return <span>{name} - 
      {birth.toString()} 
      ({age})
    </span>;
  }
}

class PropsDisplayExample extends Component {
  render() {
    return <PropsDisplay 
      name="Ivanov Vladislav" 
      birth={new Date("1990-03-14")} 
      age={32} />;
  }
};

export default PropsDisplayExample;