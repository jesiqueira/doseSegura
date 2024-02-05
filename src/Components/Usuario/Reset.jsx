import React from 'react'
import styles from './Reset.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const Reset = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>RECUPERAR-SENHA</h1>
        <form className={styles.form}>
          <Input placeholder="seu@email.com" />
          <Button>ENVIAR</Button>
        </form>
      </main>
    </div>
  )
}

export default Reset
