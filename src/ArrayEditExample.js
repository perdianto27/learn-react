import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        let { items, onChange, onDelete } = this.props;
        return items.map((k, index) => {
            return <div>
                <input key={index} name="name" 
                    value={k.name} data-index={index} 
                    onChange={onChange} />
                <button type="button" onClick={onDelete} data-index={index}>x</button>
            </div>;
        });
    }
};

class ArrayEditExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                { name: "Akua" },
                { name: "Inkomie" },
                { name: "CocaQola" },
                { name: "Funta" }
            ]
        };
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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
    handleChange(evt){
        let {name, value} = evt.target;
        let index = evt.target.getAttribute("data-index");
        this.setState((prev) => {
            return {
                ...prev,
                items: prev.items.map((item, itemIndex) => {
                    if(itemIndex == index){
                        return {
                            ...item,
                            [name]: value
                        };
                    }
                    else{
                        return item;
                    }
                })
            }
        })
    }
    deleteItem(evt){
        let index = evt.target.getAttribute("data-index");
        this.setState((prev) => {
            return {
                ...prev,
                items: prev.items.filter((item, itemIndex) => {
                    return itemIndex != index;
                })
            };
        });
    }
    render() {
        let items = this.state.items;
        return <>
            <ItemList items={items} onChange={this.handleChange} onDelete={this.deleteItem}/>
            <textarea readOnly rows={10} cols={80} value={JSON.stringify(items, 0, 2)} />
            <button type="button" onClick={this.addItem}>Add</button>
        </>;
    }
};
export default ArrayEditExample;