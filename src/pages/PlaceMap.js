import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Place from '../models/place'
import './PlaceMap.css'

class PlaceMap extends Component {

    state = {
        place: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        Place.all().then(data => {
            this.setState({ place: data.places })
        })
    }

    render() {

        let listLoop = this.state.place.map((p, index) => {
            return (
                <Marker
                    title={'C2E2'}
                    name={'C2E2'}
                    position={{ lat: p.latitude, lng: p.longitude }}
                />)
        }
        )

        return (
            <div className="map">
                <h1>Hotspot Map</h1>
                <Map
                    google={this.props.google}
                    zoom={12}
                    initialCenter={{ lat: 32.7982678, lng: -117.2491873 }}
                    style={{ width: '75%', height: '75%', position: 'relative' }}
                >
                    {this.state.place ? listLoop : 'Loading...'}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: "AIzaSyCYzSp8JjdRqdLBBvH7At25j89Pp3vIkD4",
    }))(PlaceMap)
