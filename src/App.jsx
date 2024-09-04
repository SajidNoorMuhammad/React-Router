import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Car from './Pages/Car'
import Fashion from './Pages/Fashion'
import Header from './Pages/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/car' element={<Car />} />
          <Route path='/fashion' element={<Fashion />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
