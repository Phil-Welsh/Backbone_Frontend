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
            <div className="speedtest">
                <a><b>Date</b>: {speedtest.resultDate.substring(0, 10)}</a>
                <a><b> Download speed (kbps)</b>: {speedtest.download}</a>
            </div>
        ));
    }

    return (
        <div>
            {speedtests ? generateList(speedtests) : "Loading..."}
        </div>
    );
}

export default PlaceSpeedtestList;
