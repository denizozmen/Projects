// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CityList from './pages/CityList';
import Restorant from './pages/Restorant';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CityListPage" component={CityList} />
        <Stack.Screen name="RestorantPage" component={Restorant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
