import styles from './Header.module.css'
import React from 'react'
import { ReactComponent as ComprimidoLogo } from '../Assets/logo.svg'
import { ReactComponent as Seta } from '../Assets/seta.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <ComprimidoLogo />
        <h1>
          DOSE<span>S</span>EGURA
        </h1>
      </NavLink>
      <nav className={styles.menu}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <button>
          LOGIN <Seta />
        </button>
      </nav>
    </header>
  )
}

export default Header
