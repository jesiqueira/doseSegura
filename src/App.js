import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import styles from './App.module.css'
import Sobre from './Components/Sobre/Sobre'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="sobre" element={<Sobre />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
