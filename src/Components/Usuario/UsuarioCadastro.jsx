import React from 'react'
import styles from './Cadastro.module.css'
import Label from '../Forms/Input'
import Button from '../Forms/Button'
import { Link } from 'react-router-dom'

const UsuarioCadastro = () => {
  return (
    <main className={styles.main}>
      <h1>Bem vindo(a) a DoseSegura</h1>
      <div className={styles.box}>
        <h2>Cadastrar-se</h2>
        <p>Tenha acesso ao sistema de controle de medicamento</p>
        <form className={styles.form}>
          <Label name="nome" placeholder="Informe seu nome" type="text" className={styles.nome} />
          <Label name="email" placeholder="@email.com" type="email" className={styles.email} />
          <Label name="password" placeholder="Senha" type="password" className={styles.password} />
          <Button className={styles.button}>Enviar</Button>
          <label htmlFor="check">
            <input type="checkbox" id="check" /> LI E ACEITO O <span>TERMO</span>
          </label>
          <p>
            JÁ TEM UMA CONTA?
            <span>
              <Link to="/login">ENTRE</Link>
            </span>
          </p>
        </form>
      </div>
    </main>
  )
}

export default UsuarioCadastro
