import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Incidents from './screens/Incidents';
import Details from './screens/Details';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Incidents"
        mode="card">
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Detail" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
