import { FaSearch } from "react-icons/fa";import styles from "./Search.module.scss"

const Search = ({setFilter}) => {
    const handleInput= (e) => {
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase())
    
    
     }

  return (
    <div className={styles.search}>
    <input onInput={handleInput} type="text" name="search" id="search" placeholder="rechercher" /> <FaSearch />
    </div>
  )
}

export default Search