import React, { useState } from "react";
import PlaceModel from "../models/place";
import { useNavigate } from "react-router-dom";

function NewPlace(props) {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        PlaceModel.create({ name, city, address, type }).then(
            (data) => {
                navigate("/places");
            }
        );
    }

    return (
        <div>
            <h2>New Place</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        name='address'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='type'>Type</label>
                    <input
                        type='text'
                        name='type'
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                    />
                </div>

                <input type='submit' value='Save!' />
            </form>
        </div>
    );
}

export default NewPlace;
