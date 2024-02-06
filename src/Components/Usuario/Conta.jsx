import React from 'react'
import styles from './Css/Conta.module.css'
import Menu from './Menu'
import { ReactComponent as Account } from '../../Assets/accounts_dados.svg'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { Link } from 'react-router-dom'

const Conta = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.menu}>
          <Menu infoLocal="account" />
        </div>
        <div className={styles.content}>
          <div className={styles.titulo}>
            <Account />
            <h1>Meus dados</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.nome}>
              <Input label="Nome" name="nome" type="text" />
            </div>
            <div className={styles.email}>
              <Input label="Email" name="email" type="email" />
            </div>
            <div className={styles.password}>
              <Input label="Senha Atual" name="senha" type="password" />
            </div>
            <div className={styles.confpassword}>
              <Input label="Nova Senha" name="confPassword" type="password" />
            </div>
            <div className={styles.status}>
              <div className={styles.toggleContainer}>
                <input className={styles.toggle} id="toggle" type="checkbox" />
                <label htmlFor="toggle" className={styles.toggleLabel}></label>
                <span className={styles.description}>conta ativa</span>
              </div>
              <Link to="">Excluir Minha Conta</Link>
            </div>
            <div className={styles.button}>
              <Button>ATUALIZAR</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Conta
