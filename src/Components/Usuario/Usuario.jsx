import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Conta from './Conta'

const Usuario = () => {
  return (
    <Routes>
      <Route path="/*" element={<Conta />} />
      <Route path="account" element={<Conta />} />
    </Routes>
  )
}

export default Usuario
