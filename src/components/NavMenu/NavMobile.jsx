import styles from "./NavMobile.module.scss"

const NavMobile = ({setPage}) => {
  return (
    <ul className={`${styles.menuContainer}`}>
      <li onClick={()=> setPage('admin')}>Ajouter recette</li>
      <li>Panier</li>
      <li>Compte</li>
      <li>Register</li>
    </ul>
  )
}

export default NavMobile