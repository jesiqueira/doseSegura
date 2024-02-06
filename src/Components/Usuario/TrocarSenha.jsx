import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import styles from './Css/TrocarSenha.module.css'

const TrocarSenha = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>TROCAR SENHA</h1>
        <form className={styles.form}>
          <Input placeholder="nova senha" />
          <Input placeholder="Confirme a senha" />
          <Button>ATUALIZAR</Button>
        </form>
      </main>
    </div>
  )
}

export default TrocarSenha
