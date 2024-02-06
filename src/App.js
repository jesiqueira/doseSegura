import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import styles from './App.module.css'
import Sobre from './Components/Sobre/Sobre'
import Cadastro from './Components/Usuario/Cadastro'
import DefaultLayout from './Components/Layout/DefaultLayout'
import NoHeaderFooterLayout from './Components/Layout/NoHeaderFooterLayout'
import Login from './Components/Usuario/Login'
import Reset from './Components/Usuario/Reset'
import TrocarSenha from './Components/Usuario/TrocarSenha'
import Conta from './Components/Usuario/Conta'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <div className={styles.container}>
          <Routes>
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              }
            />
            <Route
              path="sobre"
              element={
                <DefaultLayout>
                  <Sobre />
                </DefaultLayout>
              }
            />
            <Route
              path="usuario/*"
              element={
                <DefaultLayout>
                  <Conta />
                </DefaultLayout>
              }
            />
            <Route
              path="cadastro/*"
              element={
                <NoHeaderFooterLayout>
                  <Cadastro />
                </NoHeaderFooterLayout>
              }
            />
            <Route
              path="reset"
              element={
                <NoHeaderFooterLayout>
                  <Reset />
                </NoHeaderFooterLayout>
              }
            />
            <Route
              path="updatePassword"
              element={
                <NoHeaderFooterLayout>
                  <TrocarSenha />
                </NoHeaderFooterLayout>
              }
            />
            <Route
              path="login/*"
              element={
                <NoHeaderFooterLayout>
                  <Login />
                </NoHeaderFooterLayout>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
