import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TheacherItem(){
  return (
    <article className="theacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/68614231?s=460&u=2d8ca978132f13dd616bb7f15ac47453d0146bd3&v=4" alt="Jéssica Batista"/>
        <div>
          <strong> Jéssica Batista </strong>
          <span> Química </span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/> <br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TheacherItem;