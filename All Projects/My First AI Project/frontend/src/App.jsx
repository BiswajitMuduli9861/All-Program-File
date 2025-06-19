import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './component/SearchBar'
import RegisterPage from './component/RegisterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>}/>
        <Route path="/searchbar" element={<SearchBar/>}/>
      </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
