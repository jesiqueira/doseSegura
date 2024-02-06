import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { Link } from 'react-router-dom'
import styles from './Css/Login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.titulo}>
          CONECTAR-<span>ME</span>
        </h1>
        <form className={styles.form}>
          <Input placeholder="e-mail" type="text" />
          <Input placeholder="password" type="password" />
          <Button>ENTRAR</Button>
        </form>
        <div className={styles.reset}>
          <Link to="/reset">ESQUECI MINHA SENHA</Link>
        </div>
        <div className={styles.cadastro}>
          <Link to="/cadastro">
            NÃO TEM UMA CONTA? <span>CADASTRA-SE</span>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Login
