import { OrbitControls, Stars } from '@react-three/drei'
import React from 'react'

const Box = () => {
  return (
    <mesh>


        <boxGeometry/>
        <Stars/>
        <OrbitControls/>
        <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default Box
