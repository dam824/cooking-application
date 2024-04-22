import styles from "./Recipe.module.scss"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";


const Recipe = ({title, image}) => {
  const [liked, setLiked] = useState(false);

  const handleClickLike = () => {
   setLiked(!liked);
  }

  return (
    <div className={styles.recipe}>
        <div className={styles.recipeImage}>
            <img src={image} alt="photo recette 1 " />
        </div>
        <div className={styles.recipeTitle}>
            <h3>{title} </h3>
            <p className={styles.recipeContent}>ici la recette en question</p>
            {liked ? <div onClick={handleClickLike} className={styles.recipeContent}><FaHeart style={{color:"orange"}} /></div> : <div onClick={handleClickLike} className={styles.recipeContent }><FaRegHeart /></div> }
        </div>
      
    </div>
  )
}

export default Recipe