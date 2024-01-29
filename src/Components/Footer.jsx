import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Whatsapp } from '../Assets/Whats.svg'
import { ReactComponent as Email } from '../Assets/email.svg'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const [pageHome, setPageHome] = React.useState(false)
  const [pageSobre, setPageSobre] = React.useState(false)
  const [pageCadastro, setPageCadastro] = React.useState(false)

  const { pathname } = useLocation()

  React.useEffect(() => {
    if (pathname === '/') {
      setPageSobre(false)
      setPageCadastro(false)
      setPageHome(true)
    } else if (pathname === '/sobre') {
      setPageHome(false)
      setPageCadastro(false)
      setPageSobre(true)
    } else if (pathname === '/cadastro') {
      setPageHome(false)
      setPageSobre(false)
      setPageCadastro(true)
    } else {
      setPageHome(false)
      setPageSobre(false)
      setPageCadastro(false)
    }
  }, [pathname])
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <Link to="/" className={`${pageHome ? styles.detalhe : ''}`}>
          Home
        </Link>
        <Link to="/sobre" className={`${pageSobre ? styles.detalhe : ''}`}>
          Sobre
        </Link>
        <Link to="/cadastro" className={`${pageCadastro ? styles.detalhe : ''}`}>
          Cadastro
        </Link>
      </nav>
      <div className={styles.contato}>
        <h1 className={styles.desenvolvedor}>
          <span>Desenvolvedor:</span> José Edmar de Siqueira
        </h1>
        <div className={styles.link}>
          <Link to="mailto:edmar.ade@gmail.com">
            <Email />
            edmar.ade@gmail.com
          </Link>
          <Link to="https://wa.me/5516997565525">
            <Whatsapp />
            (016)99756-5525
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
