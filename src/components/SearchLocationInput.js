import React, { useState, useEffect, useRef } from "react";
import PlaceModel from "../models/place";
import { useNavigate } from "react-router-dom";

let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["establishment"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["formatted_address", "geometry", "name"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject;
    updateQuery(query);
}

function SearchLocationInput() {
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyCYzSp8JjdRqdLBBvH7At25j89Pp3vIkD4&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    function handleSubmit(event) {
        console.log(query)
        event.preventDefault();

        const name = query.name
        const address = query.formatted_address
        const latitude = query.geometry.location.lat()
        const longitude = query.geometry.location.lng()


        PlaceModel.create({ name, address, latitude, longitude }).then(
            (data) => {
                navigate("/places");
            }
        );
    }

    return (
        <div className="search-location-input">
            <form onSubmit={handleSubmit}>
                <input
                    ref={autoCompleteRef}
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Enter establishment name"
                    value={query}
                />
                <input type='submit' value='Save!' />
            </form>
        </div>
    );
}

export default SearchLocationInput;