import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PlaceModel from "../models/place";
import Comment from "../components/Comment";
import Button from "../components/Button"
import NewComment from "../components/NewComment"
import PlaceSpeedtests from "../components/PlaceSpeedtests"

const PlaceShow = () => {
    const [place, setPlace] = useState([])
    const [components, setComponents] = useState(false);
    const [user, setUser] = useState({})
    const params = useParams()

    function addComponent() {
        setComponents(true)
    }

    useEffect(
        function () {
            fetchPlace();
            fetchUser();
        },
        []

    );

    function fetchPlace() {
        PlaceModel.show(params.id).then((data) => {
            setPlace(data.place);
        });
    }

    function fetchUser() {
        fetch("https://backbone-welsh.herokuapp.com/api/v1/profile", {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
            })
            .catch(err => alert(err))
    }

    return (
        <div>
            <h1>{place.name}</h1>
            <p>Address: {place.address}</p>
            <p>IP Address: {place.ipAddress}</p> <br/>
            < PlaceSpeedtests placeId={params.id} />
            < Comment placeId={params.id} />
            < Button onClick={addComponent} text={"Add comment!"} />
            {components === true ? < NewComment user={user._id} /> : ""}
        </div>
    );
}

export default PlaceShow;
