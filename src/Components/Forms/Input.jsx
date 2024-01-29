import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, type, name, placeholder, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input type={type} id={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
