import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import img1 from '../../imagenes/1.png'
import img2 from '../../imagenes/2.png'
import img3 from '../../imagenes/3.png'
import img4 from '../../imagenes/4.png'
import img5 from '../../imagenes/5.png'
import img6 from '../../imagenes/6.png'
import img7 from '../../imagenes/7.png'
import img8 from '../../imagenes/8.png'
import img1n from '../../imagenes/1n.png'
import img2n from '../../imagenes/2n.png'
import img10n from '../../imagenes/10n.png'

export default function Card ({min, max, name, img, onClose, id}) {
  let imagenActual = 0
  if (img === "01d") imagenActual = img1
  if (img === "01n") imagenActual = img1n
  if (img === "02d") imagenActual = img2
  if (img === "02n") imagenActual = img2n
  if (img === "10d") imagenActual = img5
  if (img === "10n") imagenActual = img10n
  if (img === "03d" || img === "03n") imagenActual = img3
  if (img === "04d" || img === "04n") imagenActual = img4
  if (img === "09d" || img === "09n") imagenActual = img6
  if (img === "11d" || img === "11n") imagenActual = img7
  if (img === "13d" || img === "13n") imagenActual = img8

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
            <img className={styles.img} src={imagenActual} alt = "Imagen del clima" />
          </div>
        </div>
      </div>
    </div>
  );
};

