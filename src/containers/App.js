import React, {useState} from 'react';
import './App.css';
import About from '../components/About/About.jsx';
import Cards from '../components/Cards/Cards.jsx';
import Ciudad from '../components/Ciudad/Ciudad.jsx';
import Nav from '../components/Nav/Nav.jsx';
import { Route } from 'react-router-dom';
const {REACT_APP_APIKEY} = process.env

function App() {
  const [cities, setCities] = useState([]); //El valor inicial de useState es un array vacio, creado del destructuring del const

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_APIKEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            humedad: recurso.main.humidity,
          };
          //console.log(ciudad)
          const ciudadEncontrada = cities.find(ciudades => ciudades.id === ciudad.id);
          if (ciudadEncontrada) return alert ("La ciudad que ya se encuentra ingresada.")
          else setCities(oldCities => [...oldCities, ciudad]);
        }else if(!ciudad){
          alert("Debe escribir el nombre de una ciudad");
        }else {
          alert("Ciudad no encontrada");
        }
    });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div>
        <Nav onSearch={onSearch}/>
      <div>
        <Route exact path='/'>
          <Cards
            cities={cities}
            onClose={onClose}
          />
        </Route>
        <Route 
          path='/about'
          component={About}
        />
        <Route
          path='/ciudad/:ciudadId'
          render={ (props) => <Ciudad {...props} city = {onFilter(props.match.params.ciudadId)}/> }
        />
      </div>
    </div>
  );
}
export default App;