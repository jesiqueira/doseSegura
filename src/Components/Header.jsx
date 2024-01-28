import styles from './Header.module.css'
import React from 'react'
import { ReactComponent as ComprimidoLogo } from '../Assets/logo.svg'
import { ReactComponent as Seta } from '../Assets/seta.svg'
import { ReactComponent as Home } from '../Assets/home.svg'
import { ReactComponent as Info } from '../Assets/info.svg'
import { ReactComponent as Login } from '../Assets/login.svg'
import { NavLink, useLocation } from 'react-router-dom'
import useMedia from '../Hooks/useMedia'

const Header = () => {
  const mobile = useMedia('(max-width: 61.25rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <ComprimidoLogo />
        <h1>
          DOSE<span>S</span>EGURA
        </h1>
      </NavLink>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/">{mobile && <Home />}Home</NavLink>
        <NavLink to="/sobre">{mobile && <Info />}Sobre</NavLink>
        <button>
          {mobile && <Login />}LOGIN {!mobile && <Seta />}
        </button>
      </nav>
    </header>
  )
}

export default Header
