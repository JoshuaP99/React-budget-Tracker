import React, { useState } from "react";

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    //Render for the creation of the bill including bill name and amount
    return (
        <div className="card-footer text-center">
            <h4 className="text-center">Add a New Bill</h4>
            <form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Bill Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className="form-control"
                    type='text'
                    placeholder="Amount"
                    onChange={handleAreaInput}
                    value={area}
                /><br />
                <button className="btn btn-primary" type="submit">Add Bill</button>
            </form>
        </div>
    )
}