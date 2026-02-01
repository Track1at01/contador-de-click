import React, { useState } from 'react';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import logo from './imagenes/intentologo.png';


function App() {

  const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
      setNumClics(numClics + 1);
    };

    const reiniciarContador = () => {
      setNumClics(0);
    };

  return (
    <div className="App">
      <div className='freecodecamps-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={logo}
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
         texto = "clic"
         esBotonDeClic = {true}
         manejarClic = {manejarClic} />
        <Boton 
         texto = "Reiniciar"
         esBotonDeClic = {false}
         manejarClic = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
