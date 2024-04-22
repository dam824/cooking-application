 import Recipe from "./components/Recipes/Recipe"
import styles from "./HomePage.module.scss"
import { data } from "../../data/recipes";
import { useState } from "react";
//icons
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  const recipes = data;
  const [filter, setFilter] = useState('');

  const handleInput= (e) => {
     const filter = e.target.value;
     setFilter(filter.trim().toLowerCase())


  }

  return (
    <div className="flex-fill container p-20 ">
      <div className={styles.headerGrid}>
        <h1 className="my-30 ">Découvrez nos recettes</h1>
        <div className={styles.search}>
        <input onInput={handleInput} type="text" name="search" id="search" placeholder="rechercher" /> <FaSearch />
        </div>
      </div>
      <div className={` card p-20 ${styles.contentCard}`}>
          <div className={styles.grid}>
         {recipes
        .filter((r)=> r.title.toLowerCase().startsWith(filter))
         .map((r)=> (
          <Recipe key={r._id} title={r.title} image={r.image} />
         ))}
      </div>
      </div>
      
    </div>
  )
}

export default HomePage
