import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import { Link } from "react-router-dom";
import Tema from '../Themes/Tema.jsx'

function Nav({onSearch}){
  return(
    <div className={styles.espacio}>
      <nav>
        <div className={styles.navbar}>
          <Link className={styles.link} to ="/">
            <span>
              Weather App
            </span>
          </Link>
        <Link className={styles.link} to = "/about">About</Link>
        </div>
        <div className={styles.contenedorTemaSb}>
          <Tema/>
          <SearchBar 
            onSearch={onSearch}
          />
        </div>
      </nav>  
    </div>
  );
};
export default Nav;