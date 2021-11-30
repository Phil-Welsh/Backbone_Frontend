import React from 'react';
import SearchLocationInput from '../components/SearchLocationInput';

const Speedtest = () => {

    return (
        <div>
            <iframe title="speedtest" width="80%" height="550px" frameBorder="0" src="https://phil-welsh.github.io/Internet_Speedtest/index.html"></iframe>
            <SearchLocationInput onChange={() => null} />
        </div>
    );
}

export default Speedtest;
