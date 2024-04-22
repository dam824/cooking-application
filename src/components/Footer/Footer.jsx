 import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={` d-flex flex-row align-items-center justify-content-center ${styles.footer}` }>
      <p>Copyright ©2024 Digiworks</p>
    </footer>
  )
}

export default Footer