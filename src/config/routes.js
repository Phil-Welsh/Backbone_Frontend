import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PlaceList from '../pages/PlaceList'
import PlaceShow from '../pages/PlaceShow'
import NewPlace from '../components/NewPlace'

export default (
  <Routes>
    <Route exact path='/' element={ < Home /> } />
    <Route path='/places/:id' element= { < PlaceShow /> } />
    <Route path='/places' element={ < PlaceList /> } />
    <Route path='/newplace' element={ < NewPlace /> } />
  </Routes>
)
