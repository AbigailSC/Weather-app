import React from "react";
import { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}){
  const [city, setCity] = useState("");
  const onInputChange = (e) => {
    setCity(e.target.value)
  }
  return(
    <div>
      <form className={styles.contenedor}
        onSubmit = { (e) => {
        e.preventDefault();
        onSearch(city);
        setCity("")
      }}>
        <input
          className={styles.input}
          type = "text"
          placeholder = "Ingrese una ciudad"
          value = {city}
          onChange = { (e) => {
            setCity(e.target.value);
            onInputChange(e);
          }}
        />
        <input 
          className={styles.btnBusqueda}
          type = "submit" 
          value = "Agregar"/>
      </form>
    </div>
  );
}