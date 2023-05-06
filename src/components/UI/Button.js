import styles from './Button.module.css'
const Button = (props) => {
  const { children, disabled = false } = props
  console.log(disabled)
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
