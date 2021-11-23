import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PlaceList from '../pages/PlaceList'
import PlaceShow from '../pages/PlaceShow'
import NewPlace from '../components/NewPlace'
import NewSpeedtest from '../components/NewSpeedtest'
import SpeedtestList from '../pages/SpeedtestList'
import PlaceMap from '../pages/PlaceMap'
import Speedtest from '../pages/Speedtest'

export default (
  <Routes>
    <Route exact path='/' element={ < Home /> } />
    <Route path='/places/:id' element= { < PlaceShow /> } />
    <Route path='/places' element={ < PlaceList /> } />
    <Route path='/newplace' element={ < NewPlace /> } />
    <Route path='/newspeedtest' element={ < NewSpeedtest /> } />
    <Route path='/speedtests' element={ < SpeedtestList /> } />
    <Route path='/speedtest' element={ < Speedtest /> } />
    <Route path='/map' element={ < PlaceMap /> } />
  </Routes>
)
