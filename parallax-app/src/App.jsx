import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Podcast from './pages/Podcast'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/podcast" element={<Podcast/>} />
    </Routes>
  )
}
