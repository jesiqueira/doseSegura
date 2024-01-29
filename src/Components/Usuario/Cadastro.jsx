import React from 'react'
import styles from './Cadastro.module.css'
import Label from '../Forms/Input'
import Button from '../Forms/Button'

const Cadastro = () => {
  return (
    <main className={styles.main}>
      <h1>Bem Vindo(a) a DoseSegura</h1>
      <div className={styles.box}>
        <h1>Cadastrar-ser</h1>
        <p>Tenha acesso ao sistema de controle de medicamento</p>
        <form action="">
          <Label name="nome" placeholder="Informe seu nome" type="text" />
          <Label name="email" placeholder="@email.com" type="email" />
          <Label name="password" placeholder="Senha" type="password" />
          <Button>Enviar</Button>
        </form>
      </div>
    </main>
  )
}

export default Cadastro
