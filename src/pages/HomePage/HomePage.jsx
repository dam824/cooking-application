 import Recipe from "./components/Recipes/Recipe"
import styles from "./HomePage.module.scss"
import Loading from "../../components/Loading/Loading";

import { useContext, useState } from "react";
//icons

import { ApiContext } from "../../context/ApiContext";
import Search from "../../components/Search/Search";
import {useFetchData} from "../../hooks";

const HomePage = () => {
 
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1)

  const baseUri = useContext(ApiContext);
  const [[recipes, setRecipes], isLoading] = useFetchData(baseUri, page)

  function updateRecipe(updatedRecipe){
    setRecipes(recipes.map((r) => r._id === updatedRecipe._id ? updatedRecipe : r ))
  }

  function deleteRecipe(_id) {
    setRecipes(recipes.filter((r)=> r._id !== _id));
  }

  return (
    <div className="flex-fill container d-flex flex-column p-20 ">
      <div className={styles.headerGrid}>
        <h1 className="my-30 ">Découvrez nos recettes</h1><small className={styles.small}>{recipes.length}</small>
      
      </div>
      <div className={` card p-20 flex-fill ${styles.contentCard}`}>
        <Search setFilter={setFilter} />
         {isLoading && !recipes.length ? ( 
         <Loading /> 
        ):(
         <div className={styles.grid}>
         {recipes
        .filter((r)=> r.title.toLowerCase().startsWith(filter))
         .map((r)=> (
          <Recipe 
          key={r._id} 
          recipe={r} 
          toggleLikedRecipe ={updateRecipe} 
          deleteRecipe = {deleteRecipe}
          />
         ))}
      </div>
         )}
         <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button onClick={()=> setPage(page +1)} className="btn btn-primary">Charger plus </button>
         </div>
      </div>
      
    </div>
  )
}

export default HomePage
