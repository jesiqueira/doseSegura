import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import styles from './App.module.css'
import Sobre from './Components/Sobre/Sobre'
import Cadastro from './Components/Usuario/Cadastro'
import DefaultLayout from './Components/Layout/DefaultLayout'
import NoHeaderFooterLayout from './Components/Layout/NoHeaderFooterLayout'

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
              path="cadastro/*"
              element={
                <NoHeaderFooterLayout>
                  <Cadastro />
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
