
import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Routes, Route } from 'react-router-dom'
import toast from 'react-hot-toast'

function App() {
  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, #000_60%,#00FF9D40_100%)] "></div> */}
      
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<CreatePage/>} />
      <Route path='/note/:id' element={<NoteDetailPage/>} />
    </Routes>


    </div>
  )
}

export default App