import React, { Component } from 'react'
import PlaceModel from '../models/game'
import { Link } from 'react-router-dom'
import PlaceShow from '../components/PlaceShow'

class Places extends Component {
    state = {
        places: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        PlaceModel.all().then(data => {
            this.setState({ places: data.places })
        })
    }

    render() {
            let placeList = this.state.places.map((place, index) => {
                return (
                <Link to={`/places/${ place._id }`} key={index}>
                    <PlaceShow data={place} />
                </Link>
                )
            })

            return (
                <div>
                    <h1>All Places</h1>
                        { this.state.places ? placeList : 'Loading...' }
                </div>
            );
        }
}

export default Places;
