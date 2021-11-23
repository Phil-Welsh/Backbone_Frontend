import React, { useState, useEffect, useRef } from "react";

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
    autoComplete.setFields(["address_components", "geometry"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.geometry;
    updateQuery(query);
    console.log(addressObject);
}

function SearchLocationInput() {
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyCYzSp8JjdRqdLBBvH7At25j89Pp3vIkD4&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    return (
        <div className="search-location-input">
            <input
                ref={autoCompleteRef}
                onChange={event => setQuery(event.target.value)}
                placeholder="Enter establishment name"
                value={query}
            />
        </div>
    );
}

export default SearchLocationInput;
