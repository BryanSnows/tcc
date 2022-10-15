import React from 'react';
import Quiz from '../img/welcome.png';
import './Welcome.css';

export const Welcome = () => {
  return (
    <div id='welcome'>
        <h1>Seja bem-vindo</h1>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Game" />
    </div>
  )
}
