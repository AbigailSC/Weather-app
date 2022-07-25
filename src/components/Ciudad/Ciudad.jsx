import React, {useState} from "react";
import { useParams } from "react-router-dom";
import styles from './Ciudad.module.css'
import {WiThermometer, WiSunrise, WiStrongWind, WiCloudyGusts, WiDust, WiBarometer, WiHumidity} from 'react-icons/wi'

export default function Ciudad(props) {
  const {ciudadId}  = useParams()
  const [infoCity, setInfoCity] = useState()
  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=REACT_APP_APIKEY`)
    .then((respuesta) => respuesta.json())
    .then((info) => {
		const objetoCiudad = {
			name: info.name,
			temp: info.main.temp,
			weather: info.weather[0].main , 
			wind: info.wind.speed,
			clouds: info.clouds.all,
			latitud: info.coord.lat,
			longitud: info.coord.lon,
			humedad: info.main.humidity
		}
      setInfoCity(objetoCiudad)
    })
  if(props.city){
	return (
		<div className={styles.contenedorInfo}>
			<h2 className={styles.titulo}>{props.city.name}</h2>
			<div className={styles.info}>
				<div className={styles.bordes}>
					<WiThermometer className={styles.icon}/>
					Temperatura: {props.city.temp} ºC
				</div>
				<div className={styles.noBordes}>
					<WiSunrise className={styles.icon}/>
					Clima: {props.city.weather}
				</div>
				<div className={styles.bordes}>
					<WiStrongWind className={styles.icon}/>
					Viento: {props.city.wind} km/h
				</div>
				<div className={styles.noBordes}>
					<WiCloudyGusts className={styles.icon}/>
					Cantidad de nubes: {props.city.clouds}
				</div>
				<div className={styles.bordes}>
					<WiDust className={styles.icon}/>
					Latitud: {props.city.latitud}º
				</div>
				<div className={styles.noBordes}>
					<WiBarometer className={styles.icon}/>
					Longitud: {props.city.longitud}º
				</div>
				<div className={styles.bordes}>
					<WiHumidity className={styles.icon}/>
					Humedad: {props.city.humedad}%
				</div>
			</div>
		</div>
	)
	}else if(!infoCity) {
		return (
      <div>
        <div className={styles.posicion}>
          <div class={styles.ldsdualring}></div>
        </div>
        <h1 className={styles.loading}> Cargando.... </h1>
      </div>
		)		
	}else {
		return (
			<div className={styles.contenedorInfo}>
				<h2 className={styles.titulo}>{infoCity.name}</h2>
				<div className={styles.info}>
					<div className={styles.bordes}>Temperatura: {infoCity.temp} ºC</div>
					<div className={styles.noBordes}>Clima: {infoCity.weather}</div>
					<div className={styles.bordes}>Viento: {infoCity.wind} km/h</div>
					<div className={styles.noBordes}>Cantidad de nubes: {infoCity.clouds}</div>
					<div className={styles.bordes}>Latitud: {infoCity.latitud}º</div>
					<div className={styles.noBordes}>Longitud: {infoCity.longitud}º</div>
					<div className={styles.bordes}>Humedad: {infoCity.main.humedad}%</div>
				</div>
			</div>
		)
	}
}