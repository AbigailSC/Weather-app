import React from 'react';
import styles from './About.module.css';
import Formulario from '../Formulario/Formulario.jsx'
import img from '../../imagenes/perfil.jpg';
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'

export default function About() {
  return (
    <div className={styles.contenedorPrincipalDark}>
      <div className={styles.contenedorTI}>
        <div className={styles.contenedorHeader}>
          <h1 className={styles.titulo}>DESARROLLADORA FULLSTACK</h1>
          <span className={styles.presentacion}>Desarrolladora Full Stack con una fuerte inclinación artística y creativa que me lleva a disfrutar especialmente del diseño y el desarrollo Front-end, con capacidad de crear proyectos web escalables y modularizados teniendo en cuenta el trabajo en equipo.</span>
        </div>
        <div className={styles.divImg}>
          <img className={styles.img} src={img} alt="Imagen de perfil" />
        </div>
      </div>
      <div className={styles.contenedorContactoForm}>
        <div className={styles.contenedorForm}>
          <h2 className={styles.textoContacto}>CONTACTAME</h2>
          <div className={styles.divMail}>
            <AiOutlineMail className={styles.iconos} />
            <h3 className={styles.textoInfo}>Abigailsarzuri@gmail.com</h3>
          </div>
          <div className={styles.divMail}>
            <BsTelephone className={styles.iconos} />
            <h3 className={styles.textoInfo}>+054 1122522184</h3>
          </div>
          <div className={styles.divMail}>
            <BiMap className={styles.iconos} />
            <h3 className={styles.textoInfo}>CABA, Argentina</h3>
          </div>
        </div>
        <div className={styles.responsive}>
          <Formulario />
        </div>
      </div>
    </div>
  )
}