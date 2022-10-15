import React from 'react';
import Quiz from '../img/quiz.svg'

export const Welcome = () => {
  return (
    <div>
        <h1>Seja bem-vindo</h1>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="" />
    </div>
  )
}
