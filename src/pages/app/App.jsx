import { useState } from 'react'
// import './App.css'
import Home from '../home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Package from '../active packages/Package'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/active-package' element={<Package />} />
        <Route path='/home' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
