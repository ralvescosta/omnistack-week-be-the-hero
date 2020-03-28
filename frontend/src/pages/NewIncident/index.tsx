import React, {useState, FormEvent} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import axios from '../../services/axios'

import './styles.css'
import logoImage from '../../assets/logo.svg'

const NewIncident: React.FC = () => {
  const history = useHistory();
  const ongId = localStorage.getItem('ongId')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  async function handleNewIncident(e: FormEvent) {
    e.preventDefault()
    try {
      await axios.post('/incidents',
        {title, description, value},
          {
            headers:
            {
              Authorization:ongId
            }
          }
        )
      history.push('/profile')
    }catch(err){
      alert('Error ao tentar cadastrar um novo caso, tente novamente')
    }

  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Heroes"/>

          <h1>Cadastro Novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
