import styles from "./Header.module.scss"
import logo from "../../assets/images/cookchef.png"
import { useState, useEffect } from "react";


//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { RiLoginCircleLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import NavMobile from "../NavMenu/NavMobile";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

const handleClickMobile = () => {
  setShowMenu(!showMenu)
}

useEffect(() => {
  const handleResize = () => {
    if(window.innerWidth > 768 ) {
      setShowMenu(false);
    }
  }

window.addEventListener('resize', handleResize);
return() => {
  window.addEventListener('resize', handleResize)
};

}, []);

  return (
    <header className={`   ${styles.header}   d-flex flex-row align-items-center`}>
       <RxHamburgerMenu onClick={handleClickMobile} className={`mr-15 ${styles.navMobile} `} />
       {showMenu && 
       <>
      <div onClick={() => setShowMenu(false)} className="calc"></div>
       <NavMobile /> 
       </>   
       }
      <div className="flex-fill">
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.navDesktop}>
        <button className="mr-5 btn btn-primary">< SlBasket className="mr-5" />Panier</button>
       <button className="mr-5 btn btn-primary"> <VscAccount className="mr-5" />Compte</button>
       <button className="btn btn-primary">< RiLoginCircleLine className="mr-5" />Register</button>
      </ul>
      
    </header>
  )
}

export default Header