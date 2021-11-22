import { useState, useEffect } from "react";
import PlaceModel from "../models/place";

function usePlaces(placeId) {
    const [places, setPlaces] = useState([]);

    function fetchPlaces(id) {
        if (id) {
            PlaceModel.show(id).then((data) => {
                setPlaces(data.place);
            });
        } else {
            PlaceModel.all().then((data) => {
                setPlaces(data.places);
            });
        }
    }

    useEffect(
        function () {
            fetchPlaces(placeId);
        },
        [placeId]
    );

    return [places, fetchPlaces];
}

export default usePlaces;
