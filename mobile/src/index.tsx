import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './Navigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <Navigation />
    </>
  );
};

export default App;
