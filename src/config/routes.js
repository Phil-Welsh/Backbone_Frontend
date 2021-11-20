import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import GameList from '../pages/GameList'
import GameShow from '../pages/GameShow'
import NewGame from '../pages/NewGame'

export default (
  <Routes>
    <Route exact path='/' element={ < Home /> } />
    <Route path='/games/:id' element= { < GameShow /> } />
    <Route path='/games' element={ < GameList /> } />
    <Route path='/newgame' element={ < NewGame /> } />
  </Routes>
)
