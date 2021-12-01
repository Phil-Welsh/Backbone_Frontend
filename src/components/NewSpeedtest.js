import React, { useState } from "react";
import SpeedtestModel from "../models/speedtest";
import { useNavigate } from "react-router-dom";

function NewSpeedtest(props) {
    const [resultDate, setResultDate] = useState(null);
    const [ipAddress, setIpAddress] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [download, setDownload] = useState(null);
    const [upload, setUpload] = useState(null);
    const [latency, setLatency] = useState(null);
    const [jitter, setJitter] = useState(null);
    const [testId, setTestId] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        SpeedtestModel.create({ resultDate, ipAddress, country, region, city, latitude, longitude, download, upload, latency, jitter, testId }).then(
            (data) => {
                navigate("/speedtests");
            }
        );
    }

    return (
        <div>
            <h2>New Speedtest</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label htmlFor='resultDate'>resultDate</label>
                    <input
                        type='Date'
                        name='resultDate'
                        onChange={(e) => setResultDate(e.target.value)}
                        value={resultDate}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='ipAddress'>ipAddress</label>
                    <input
                        type='text'
                        name='ipAddress'
                        onChange={(e) => setIpAddress(e.target.value)}
                        value={ipAddress}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='region'>Region</label>
                    <input
                        type='text'
                        name='region'
                        onChange={(e) => setRegion(e.target.value)}
                        value={region}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='latitude'>Latitude</label>
                    <input
                        type='text'
                        name='latitude'
                        onChange={(e) => setLatitude(e.target.value)}
                        value={latitude}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='longitude'>Longitude</label>
                    <input
                        type='text'
                        name='longitude'
                        onChange={(e) => setLongitude(e.target.value)}
                        value={longitude}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='download'>Download</label>
                    <input
                        type='number'
                        name='download'
                        onChange={(e) => setDownload(e.target.value)}
                        value={download}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='upload'>Upload</label>
                    <input
                        type='number'
                        name='upload'
                        onChange={(e) => setUpload(e.target.value)}
                        value={upload}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='latency'>Latency</label>
                    <input
                        type='number'
                        name='latency'
                        onChange={(e) => setLatency(e.target.value)}
                        value={latency}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='jitter'>Jitter</label>
                    <input
                        type='number'
                        name='jitter'
                        onChange={(e) => setJitter(e.target.value)}
                        value={jitter}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='testId'>Test Id</label>
                    <input
                        type='text'
                        name='testId'
                        onChange={(e) => setTestId(e.target.value)}
                        value={testId}
                    />
                </div>
                <input type='submit' value='Save!' />
            </form>
        </div>
    );
}

export default NewSpeedtest;
