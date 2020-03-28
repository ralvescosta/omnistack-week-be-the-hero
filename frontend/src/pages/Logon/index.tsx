import React, {useState, FormEvent} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'

import axios from '../../services/axios'

import './styles.css'
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

const Logon: React.FC = () => {
  const history = useHistory()
  const [id, setId] = useState('')

  async function handleLogin(e: FormEvent):Promise<void>{
    e.preventDefault()

    try {
      const {data} = await axios.post('/sessions', {
        id
      })
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', data.name);
      history.push('/profile')
    }catch(err){
      console.log(err)
      alert(`Opss, ocorreu um erro no LogIn, tente novamente`)
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be The Heroes"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Seu ID"
            value={id}
            onChange={(e)=> setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes"/>
    </div>
  );
}

export default Logon;
