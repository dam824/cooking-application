import { useContext } from "react";
import styles from "./Recipe.module.scss"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ApiContext } from "../../../../context/ApiContext";
import { SlClose } from "react-icons/sl";
 


const Recipe = ({recipe: {_id, liked, title, image}, toggleLikedRecipe, deleteRecipe }) => {
  const baseUri = useContext(ApiContext)
   

  async function handleClick() {
    try{
      const response = await fetch(`${baseUri}/${_id}`, {
        method : 'PATCH',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          liked: !liked,
        })
      });
      if(response.ok){
        const updatedRecipe = await response.json();
        toggleLikedRecipe(updatedRecipe)
      }
    }catch(e){
      console.log('ERREUR')
    }
  }

  async function handleClickDelete(e){
    e.stopPropagation();
    try{
      const response = await fetch(`${baseUri}/${_id}`, {method: 'DELETE'});
      if (response.ok){
        deleteRecipe(_id);
      }
    }catch(e){
      console.log('erreur')
    }
  }

  return (
    <div className={styles.recipe}>
      
        <div className={styles.recipeImage}>
       
            <img src={image} alt="photo recette 1 " />
        </div>
        <div className={styles.recipeTitle}>
            <h3>{title} </h3>
            <p className={styles.recipeContent}>ici la recette en question</p>
            
            {liked ? <div onClick={handleClick} className={styles.recipeContent}><FaHeart style={{color:"orange"}} /><SlClose onClick={handleClickDelete} style={{color: "orange", marginLeft:"20px"}} /></div> : <div onClick={handleClick} className={styles.recipeContent }><FaRegHeart /></div> }
        </div>
      
    </div>
  )
}

export default Recipe