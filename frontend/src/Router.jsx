import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {Home}  from './components/Home/Home'
import {Music} from './components/Music/Music'
import {Photo} from './components/Photo/Photo'
import {Video} from './components/Video/Video'
import { Layout } from './components/Layout/Layout.jsx'

export const Router = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="music" element={<Music />} />
        <Route path="photo" element={<Photo />} />
        <Route path="video" element={<Video />} />
        <Route path="*" element={<div>not found</div>}/>
    </Route>
  </Routes>
  )
}
