import {StyleSheet, StatusBar} from 'react-native';

const containerPaddingTop = (StatusBar.currentHeight || 0) + 20;

export default StyleSheet.create({
  constrainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: containerPaddingTop,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  headerTextBold: {
    fontWeight: 'bold',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 48,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },
  hedroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
