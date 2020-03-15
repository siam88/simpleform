
import React, { useState } from "react";

export default function Form() {

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [items, setItems] = useState([
        { id: 1, name: "Alabama" },
        { id: 2, name: "Georgia" },
        { id: 3, name: "Tennessee" }
    ]);


    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log({ id: id, name: name })
        setItems([...items, { id: id, name: name }])


    }
    return (
        <fragment>
            {items.map(e => <p>{e.name} </p>)}

            <form onSubmit={handleSubmit}>
                <label>  Frirst Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br /><br />
                <label> id:</label>
                <input
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
                /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </fragment>
    );
}




