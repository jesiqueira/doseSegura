import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsuarioCadastro from './UsuarioCadastro'

const Cadastro = () => {
  return (
    <Routes>
      <Route path="/*" element={<UsuarioCadastro />} />
    </Routes>
  )
}

export default Cadastro
