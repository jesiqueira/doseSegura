import React from 'react'
import styles from './Css/Menu.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Account } from '../../Assets/accounts.svg'
import { ReactComponent as PensonAdd } from '../../Assets/person_add.svg'
import { ReactComponent as Medication } from '../../Assets/medication.svg'
import { ReactComponent as MedicalInfo } from '../../Assets/medical_inf.svg'
import { ReactComponent as ListaMedicamento } from '../../Assets/listMedicamento.svg'
import { ReactComponent as Monitor } from '../../Assets/monitor.svg'

const Menu = ({ infoLocal }) => {
  const [local, setLocal] = React.useState('')

  React.useEffect(() => {
    if (infoLocal) {
      setLocal(infoLocal)
    }
  }, [infoLocal])

  return (
    <div className={styles.menu}>
      <div className={styles.menu_item}>
        <Link to="account" className={`${local === 'account' ? styles.linkAtivo : ''}`}>
          <Account />
        </Link>
      </div>
      <div className={styles.menu_item}>
        <Link to="" className={`${local === 'pensonadd' ? styles.linkAtivo : ''}`}>
          <PensonAdd />
        </Link>
      </div>
      <div className={styles.menu_item}>
        <Link to="" className={`${local === 'medication' ? styles.linkAtivo : ''}`}>
          <Medication />
        </Link>
      </div>
      <div className={styles.menu_item}>
        <Link to="" className={`${local === 'medicalInfo' ? styles.linkAtivo : ''}`}>
          <MedicalInfo />
        </Link>
      </div>
      <div className={styles.menu_item}>
        <Link to="" className={`${local === 'listaMedicamento' ? styles.linkAtivo : ''}`}>
          <ListaMedicamento />
        </Link>
      </div>
      <div className={styles.menu_item}>
        <Link to="" className={`${local === 'monitor' ? styles.linkAtivo : ''}`}>
          <Monitor />
        </Link>
      </div>
    </div>
  )
}

export default Menu
