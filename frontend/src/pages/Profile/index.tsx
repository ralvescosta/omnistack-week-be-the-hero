import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import axios from '../../services/axios'

import './styles.css'
import logoImage from '../../assets/logo.svg'

type Ong = {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
}

interface Incidents {
  id: number;
  ongId: string,
  title: string,
  description: string,
  value: number,
  ong: Ong
}

const Profile: React.FC = () => {
  const history = useHistory()
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')

  const [incidents, setIncidents] = useState<Incidents[]>([])

  useEffect(() => {
    async function fetch():Promise<void>{
      const {data} = await axios.get('/profile', {
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(data)
    }
    fetch()
  }, [ongId])

  async function handleDeleteIncident(id: number):Promise<void>{
    try {
      await axios.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
    }catch(err){
      alert('Erro ao tentar deletar, tente novamente')
    }
    setIncidents(incidents.filter(incident => incident.id !== id))
  }

  function handleLogOut(): void{
    localStorage.clear()
    history.push('/')
  }


  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be The Heroes"/>
        <span>Bem vinda, {ongName}</span>
        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogOut}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BT', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            <button type="button" onClick={()=>handleDeleteIncident(incident.id)}> <FiTrash2 size={20} color="#a8a8b3"/></button>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Profile;
