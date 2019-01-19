import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        let { items } = this.props;
        return items.map((k, index) => {
            return <span key={index}>{k.name}</span>;
        });
    }
};

class ItemListExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            param1: "this is param1",
            param2: [ "this is param2" ],
            items: [
                { name: "Akua" },
                { name: "Inkomie" },
                { name: "CocaQola" },
                { name: "Funta" }
            ]
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(){
        let names = ["Pertamaz", "Dill", "Logetich"];
        this.setState((prev) => {
            return {
                ...prev,
                items: [
                    ...prev.items,
                    { name: names[prev.items.length - 4] || "-" }
                ]
            }
        })
    }
    render() {
        let items = this.state.items;
        return <>
            <ItemList items={items} />
            <button type="button" onClick={this.addItem}>Add</button>
        </>;
    }
};
export default ItemListExample;