import React, {useMemo} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

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

type T = {
  incident: Incidents;
};

const Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {incident}: T = route.params;

  const formatValue = useMemo(
    () =>
      Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(incident.value),
    [incident],
  );

  const message = `Olá ${incident.ong.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}", com o valor de R$ ${formatValue}`;

  function navigateToIncidents() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: ['rafael.rac.mg@gmail.com'],
      body: message,
    });
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.ong.whatsapp}&text=${message}`,
    );
  }

  return (
    <View style={styles.constrainer}>
      <View style={styles.header}>
        <Image source={logoImage} />
        <TouchableOpacity onPress={navigateToIncidents}>
          <Feather name="arrow-left" size={26} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.ong.name}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>{formatValue}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.hedroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionsText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionsText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
