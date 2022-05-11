import React, { useState } from "react";
import styles from './Tema.module.css';
import {WiDaySunny, WiMoonWaxing6} from 'react-icons/wi';

export default function Tema(){

  const [temaDark, setTemaDark] = useState(false);
  
  return(
    <div className={styles.contenedor}>
      <WiDaySunny className={temaDark ? styles.iconDark : styles.iconWhite}/>
      <div className={styles.switchCheckbox}>
        <label className={styles.switch}>
          <input type="checkbox" onChange={() => setTemaDark(!temaDark)}/>
          <span className={styles.slide}></span>
        </label>
      </div>
      <WiMoonWaxing6 className={temaDark ? styles.iconWhite : styles.iconDark}/>
    </div>
  );
}