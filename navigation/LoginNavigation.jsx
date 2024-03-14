import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import MainAppNavigation from './MainAppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import OtpCheck from '../screens/OtpCheck';
import UserDetails from '../screens/UserDetails';

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OtpCheck"
          component={OtpCheck}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainAppNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
