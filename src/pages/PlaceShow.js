import React from 'react';
import { useParams } from 'react-router';
import usePlaces from "../hooks/usePlaces"

const PlaceShow = () => {

    const params = useParams()

    return (
        <div>
            < usePlaces placeId = { params.id } />
        </div>
        );
    }

export default PlaceShow;
