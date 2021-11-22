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
    const [serverName, setServerName] = useState("");
    const [serverSponsor, setServerSponsor] = useState("");
    const [browserName, setBrowserName] = useState("");
    const [browserVersion, setBrowserVersion] = useState("");
    const [userAgent, setUserAgent] = useState("");
    const [ispName, setIspName] = useState("");
    const [ispNameRaw, setIspNameRaw] = useState("");
    const [OS, setOS] = useState("");
    const [download, setDownload] = useState(null);
    const [upload, setUpload] = useState(null);
    const [latency, setLatency] = useState(null);
    const [jitter, setJitter] = useState(null);
    const [testId, setTestId] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        SpeedtestModel.create({ resultDate, ipAddress, country, region, city, latitude, longitude, serverName, serverSponsor, browserName, browserVersion, userAgent, ispName, ispNameRaw, OS, download, upload, latency, jitter, testId }).then(
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
                    <label htmlFor='serverName'>Server Name</label>
                    <input
                        type='text'
                        name='serverName'
                        onChange={(e) => setServerName(e.target.value)}
                        value={serverName}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='serverSponsor'>Server Sponsor</label>
                    <input
                        type='text'
                        name='serverSponsor'
                        onChange={(e) => setServerSponsor(e.target.value)}
                        value={serverSponsor}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='browserName'>Browser Name</label>
                    <input
                        type='text'
                        name='browserName'
                        onChange={(e) => setBrowserName(e.target.value)}
                        value={browserName}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='browserVersion'>Browser Version</label>
                    <input
                        type='text'
                        name='browserVersion'
                        onChange={(e) => setBrowserVersion(e.target.value)}
                        value={browserVersion}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='userAgent'>User Agent</label>
                    <input
                        type='text'
                        name='userAgent'
                        onChange={(e) => setUserAgent(e.target.value)}
                        value={userAgent}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='ispName'>ispName</label>
                    <input
                        type='text'
                        name='ispName'
                        onChange={(e) => setIspName(e.target.value)}
                        value={ispName}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='ispNameRaw'>Isp Name Raw</label>
                    <input
                        type='text'
                        name='ispNameRaw'
                        onChange={(e) => setIspNameRaw(e.target.value)}
                        value={ispNameRaw}
                    />
                </div>
                <div className='form-input'>
                    <label htmlFor='OS'>OS</label>
                    <input
                        type='text'
                        name='OS'
                        onChange={(e) => setOS(e.target.value)}
                        value={OS}
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
