import React, { Component } from 'react'

export class classbaseForm extends Component {

    state = {
        items: [{ id: 1, name: "Alabama" },
        { id: 2, name: "Georgia" },
        { id: 3, name: "Tennessee" }],
        item: { id: 3, name: "Tennessee" }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var items = [...this.state.items];
        items.push(this.state.item);
        this.setState({
            items
        })
    }

    handleChange = (e) => {
        if (e.target.name == "id") {
            this.state.item.id = e.target.value
        }
        else {
            this.state.item.name = e.target.value;
        }

    }
    render() {
        return (
            <div>
                {this.state.items.map(e => <p>{e.name}</p>)}


                <form onSubmit={this.handleSubmit}>
                    <label>id</label>
                    <input type="text" name="id" onChange={(e => this.handleChange(e))} /><br /><br />
                    <label>name</label>
                    <input type="text" name="name" onChange={(e => this.handleChange(e))} /><br /><br />
                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}

export default classbaseForm
