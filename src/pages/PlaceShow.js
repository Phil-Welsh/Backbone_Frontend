import React, { useState, setState } from 'react'
import GameModel from '../models/game'
import GameShowCard from '../components/GameShowCard'
import { useParams } from 'react-router-dom'

const PlaceShow = () => {
    const [ title, setTitle ] = useState('')
    const [ img, setImg ] = useState('')
    const [ id, setId ] = useState('')

    const params = useParams()

    PlaceModel.show(params.id).then(data => {
        setTitle( data.place.title )
        setImg ( data.place.coverArtUrl)
        setId ( data.place._id)
    })

    return (
        <div>
            < GameShowCard title={title} img={img} _id={id} />
        </div>
        );
    }

export default GameShow;
