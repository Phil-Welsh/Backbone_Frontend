import React, { useEffect, useState } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useNavigate } from 'react-router-dom';
import Place from '../models/place'
import './PlaceMap.css'

const PlaceMap = (props) => {
    const [places, setPlaces] = useState([])

    const navigate = useNavigate()

    useEffect(
        function() {
            fetchPlaces();
        },
        []
    );

    function fetchPlaces() {
        Place.all().then(data => {
            setPlaces(data.places)
        })
    }

    function generatePlaces(places) {
        return places.map((p, index) => (
                <Marker
                    title={'C2E2'}
                    name={'C2E2'}
                    position={{ lat: p.latitude, lng: p.longitude }}
                    onClick={() => {
                        navigate(`/places/${p._id}`);
                    }}
                />
            )
        )
    }

    return(
        <div className="map">
            <h1>Hotspot Map</h1>
                <Map
                    google={props.google}
                    zoom={12}
                    initialCenter={{ lat: 32.7982678, lng: -117.2491873 }}
                    style={{ width: '75%', height: '75%', position: 'relative' }}
                >
                {places ? generatePlaces(places) : "Loading..."}
                </Map>
        </div>
    )
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: "AIzaSyCYzSp8JjdRqdLBBvH7At25j89Pp3vIkD4",
    }))(PlaceMap)
