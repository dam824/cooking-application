import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import { useState } from "react";



//import css
import styles from "./App.module.scss"
import Admin from "./pages/Admin/Admin";
//import { seedRecipes } from "./data/seed";

// seedRecipes();

function App() {

  const [page, setPage] = useState('homepage')
 

  return (
    <>
     
    <div className={`d-flex flex-column ${styles.appContainer}`}>
    <Header setPage= {setPage} />
    {page === 'homepage' &&  <HomePage /> }
    {page === 'admin' &&  <Admin /> }
   
    <Footer />
    </div>
 
   
    </>
  )
}

export default App
