import React from "react";
import {NewRoomForm} from './NewRoomForm'

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li className="list-group text-center" key={index}>
                    <label> {`Name: ${room.name} Area: ${room.area}`}</label>
                    <button className="btn btn-primary btn-block" onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="card text-center" style={{width: "50rem", margin: "0 auto", float: "none"}}>
            <h1 className="text-center">{house.name}</h1>
            {
                rooms({rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )
}