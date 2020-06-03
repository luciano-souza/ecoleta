import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// import { Container } from './styles';

import logo from '../../assets/logo.svg';


import './styles.css';

const CreatePoint: React.FC = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>

            <input
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">

            <div className="field">
              <label htmlFor="name">Nome da entidade</label>

              <input
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="field">
              <label htmlFor="name">Nome da entidade</label>

              <input
                type="text"
                name="name"
                id="name"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
          </legend>
        </fieldset>
      </form>
    </div>
  );
}

export default CreatePoint;
