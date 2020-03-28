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
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentList: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },
  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: '#737380',
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
