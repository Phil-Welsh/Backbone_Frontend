import React, {useEffect, useState} from 'react'
import SpeedtestModel from "../models/speedtest";

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
                <a><b> Download speed (Mbps)</b>: {speedtest.download}</a>
            </div>
        ));
    }

    return (
        <>
        {speedtests.length ? (
                <div>
                    <h2>Recent speedtests</h2>
                    {generateList(speedtests)}
                </div>
                ) :

                (
                    <div>

                    </div>
                )
            }
        </>
    )
}



export default PlaceSpeedtestList;
