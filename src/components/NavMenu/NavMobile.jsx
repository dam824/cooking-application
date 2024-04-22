import styles from "./NavMobile.module.scss"

const NavMobile = () => {
  return (
    <ul className={`${styles.menuContainer}`}>
      <li>Panier</li>
      <li>Compte</li>
      <li>Register</li>
    </ul>
  )
}

export default NavMobile