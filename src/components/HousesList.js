import React from "react";
import { housesApi } from "../rest/HousesApi";
import { House } from './House'

export default class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount(){
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({houses});
    }

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    }

    //Render for the overall budget and the bills that exist within it
    render(){
        return (
            <div className="card-header">
                {this.state.houses.map((house) => (
                    <House
                        house = {house}
                        key = {house._id}
                        updateHouse = {this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}