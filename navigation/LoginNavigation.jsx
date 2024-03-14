import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MainAppNavigation from './MainAppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainApp" component={MainAppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
