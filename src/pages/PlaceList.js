import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import PlaceModel from "../models/place";
import './PlaceList.css'

function PlaceList() {
    const [places, setPlaces] = useState([]);

    useEffect(
        function() {
            fetchPlaces();
        },
        []
    );

    function fetchPlaces() {
            PlaceModel.all().then((data) => {
                setPlaces(data.places);
            });
        }

    function generateList(places) {
        return places.map((place, index) => (
            <Link to={`/places/${place._id}`} key={index}>
                <div>
                    {place.name}
                </div>
            </Link>
        ));
    }

    return (
        <div>
            <h1>All Places</h1>
            {places.length ? generateList(places) : "Loading..."}
        </div>
    );
}

export default PlaceList;
