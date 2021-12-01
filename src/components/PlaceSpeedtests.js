import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import SpeedtestModel from "../models/speedtest";
import './PlaceSpeedtests.css'

function PlaceSpeedtestList(props) {
    const [speedtests, setSpeedtests] = useState([]);

    useEffect(
        function() {
            fetchSpeedtests();
        },
        []
    );

    function fetchSpeedtests() {
            SpeedtestModel.all(props).then((data) => {
                setSpeedtests(data.speedtests);
            });
        }

    function generateList(speedtests) {
        return speedtests.map((speedtest, index) => (
            <Link to={`/speedtests/${speedtest._id}`} key={index}>
                <div className="speedtest">
                    <a>
                        {speedtest.download}
                        <br/>
                    </a>
                </div>
            </Link>
        ));
    }

    return (
        <div>
            <h3>Speedtests</h3>
            {speedtests ? generateList(speedtests) : "Loading..."}
        </div>
    );
}

export default PlaceSpeedtestList;
