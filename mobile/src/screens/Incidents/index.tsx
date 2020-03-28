import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import axios from '../../services/axios';

import logoImage from '../../assets/logo.png';

type Ong = {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
};

interface Incidents {
  id: number;
  ongId: string;
  title: string;
  description: string;
  value: number;
  ong: Ong;
}

const Profile = () => {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState<Incidents[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident: Incidents) {
    navigation.navigate('Detail', {incident});
  }

  async function fetchIncidents() {
    // previne buscar conteudo no meio de outra busca
    if (loading) {
      return;
    }

    // previne buscar conteudo caso ja tenha buscado todas as paginacoes
    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get('/incidents', {params: {page}});
      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers['x-total-count']);
    } catch (err) {
      Alert.alert('Ops, algo deu errado, hehehehe');
    }
    setLoading(false);
    setPage(page + 1);
  }

  useEffect(() => {
    fetchIncidents();
  }, []);
  return (
    <View style={styles.constrainer}>
      <View style={styles.header}>
        <Image source={logoImage} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.headerTextBold}> {total} casos.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        renderItem={({item: incident}) => (
          <View style={styles.incidentList}>
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.ong.name}</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>Valor:</Text>
              <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)}
              </Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(incident)}>
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#e02041" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchIncidents} // funcao que faz o load das novas infos da lista
        onEndReachedThreshold={0.2} // porcentagem que representa o momento em que sera executado a funcao acima com relacao a lista atual
      />
    </View>
  );
};

export default Profile;
