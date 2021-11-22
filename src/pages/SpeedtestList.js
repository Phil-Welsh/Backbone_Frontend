import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import SpeedtestModel from "../models/speedtest";

function SpeedtestList() {
    const [speedtests, setSpeedtests] = useState([]);

    useEffect(
        function() {
            fetchSpeedtests();
        },
        []
    );

    function fetchSpeedtests() {
            SpeedtestModel.all().then((data) => {
                setSpeedtests(data.speedtests);
            });
        }

    function generateList(speedtests) {
        return speedtests.map((speedtest, index) => (
            <Link to={`/speedtests/${speedtest._id}`} key={index}>
                {speedtest.testId}
            </Link>
        ));
    }

    return (
        <div>
            <h1>All Speedtests</h1>
            {speedtests.length ? generateList(speedtests) : "Loading..."}
        </div>
    );
}

export default SpeedtestList;
