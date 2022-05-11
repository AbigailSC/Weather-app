import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card ({min, max, name, img, onClose, id}) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.espacioBtn}>
        <button className={styles.btnClose} onClick={onClose}>X</button>
      </div>
      <div>
        <div className={styles.espacioNombre}>
          <Link className={styles.link} to = {`/ciudad/${id}`}>
            <h2 className={styles.nombre}>{name}</h2>
          </Link>
        </div>
        <div>
          <div className={styles.contenedormm}>
            <h3 className={styles.textM}>Min</h3>
            <h3 className={styles.text}>{min}°</h3>
          </div>
          <div className={styles.contenedormm}>
            <h3 className={styles.textM}>Max</h3>
            <h3 className={styles.text}>{max}°</h3>
          </div>
          <div className={styles.imgcenter} >
            <img className={styles.img} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt = "Imagen del clima" />
          </div>
        </div>
      </div>
    </div>
  );
};

