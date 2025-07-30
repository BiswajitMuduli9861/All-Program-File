import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Sky} from '@react-three/drei'
import Box from './components/Box'
import DogModel from './components/DogModel'
function App() {
  

  return (
    <Canvas style={{ height: '100vh'}}>
     
        <Sky/>
        <Box/>
        <DogModel/>
  
    
    </Canvas>
  )
}

export default App
