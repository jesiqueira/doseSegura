import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Whatsapp } from '../Assets/Whats.svg'
import { ReactComponent as Email } from '../Assets/email.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/cadastro">Cadastro</Link>
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
