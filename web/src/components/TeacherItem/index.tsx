import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/57374851?s=460&u=0f139f6b19b393397af2510111aeb3a899e7f385&v=4" alt="Leonardo" />
        <div>
          <strong>Leonardo Girardi</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Teste
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )
}

export default TeacherItem;