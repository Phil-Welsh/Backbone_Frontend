import React from 'react'
import { Link } from 'react-router-dom'
import PlaceShow from './PlaceShow'
import usePlaces from "../hooks/usePlaces";

function PlaceList(props) {
    const [places, fetchPlaces] = usePlaces();

    function generateList(places) {
        return places.map((place, index) => (
            <Link to={`/places/${place._id}`} key={index}>
                <PlaceShow {...place} />
            </Link>
        ));
    }

    return (
        <div>
            <h1>All Places</h1>
            {places.length}
            {places.length ? generateList(places) : "Loading..."}
            <button onClick={fetchPlaces} >Get Places</button>
        </div>
    );
}

export default PlaceList;
