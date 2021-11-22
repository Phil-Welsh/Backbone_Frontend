import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import PlaceModel from "../models/place";

const PlaceShow = () => {
    const [place, setPlace] = useState([])

    const params = useParams()

    useEffect(
        function() {
            fetchPlace();
        },
        []
    );

    function fetchPlace() {
        PlaceModel.show(params.id).then((data) => {
            setPlace(data.place);
        });
    }

    return (
        <div>
            {place.name}
        </div>
        );
    }

export default PlaceShow;
