import React, { useState } from "react";
import styles from './Formulario.module.css'

export default function Formulario (){

  const [estado, setEstado] = useState({})
  const [errores, setErrores] = useState("")

  // function validacionDelFormulario(value) {

  //   let errores={}

  //   if(!value.email) errores.email = 'No ingreso la mail'
  //   else if (!/\S+@\S+\.\S+/.test(value.mail)) {
  //     setErrores("el usuario tiene que ser un email");
  //   }
  //   if(!value.nombre) errores.nombre = 'No ingreso el nombre'
  //   else if (!/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/gm(value.nombre)) {
  //     setErrores("el nombre son 2 maximos");
  //   }
  //   return errores
  // }

  const handleChange = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    alert("Se envio la información")
  }

  return(
    <form className={styles.contenedor} onSubmit = {handleOnSubmit}>
      <div className={styles.contenedorInput}>
        <input  
          className={styles.input}
          onChange={handleChange}
          value={estado.email}
          type="text" 
          placeholder="E-mail" 
          name="email"
          />
          {!errores ? null : <span className={styles.span}>{errores}</span>}
      </div>
      <div className={styles.contenedorInput}>
        <input 
          className={styles.input}
          onChange={handleChange} 
          value={estado.nombre}
          type="text" 
          placeholder="Nombre" 
          name="nombre"
          />
          {!errores ? null : <span className={styles.span}>{errores}</span>}
      </div>
      <div className={styles.contenedorInput}>
        <textarea 
        className={styles.inputMsg}
        onChange={handleChange} 
        value={estado.mensaje}
        type="text" 
        placeholder="Mensaje" 
        name="mensaje"
        />
        {errores && errores.mensaje ? <span className={styles.span}> { errores.mensaje }  </span> : null}
      </div>
      <div className={styles.contenedorInput}>
        <button
        className={styles.btn}
        type="submit" 
        name="submit" 
        >Enviar</button>
      </div>
  </form>
  )
}