import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import MainAppNavigation from './MainAppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import OtpCheck from '../screens/OtpCheck';
import UserDetails from '../screens/UserDetails';
import MySpaceLogin from '../components/MySpaceLogin';

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
  return (
    <Stack.Navigator initialRouteName="MySpaceScreen">
      {/*<Stack.Screen
        name="MainApp"
        component={MainAppNavigation}
        options={{
          headerShown: false,
        }}
      />*/}
      <Stack.Screen
        name="MySpaceScreen"
        component={MySpaceLogin}
        options={{
          headerShown: false,
        }}
      />
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
  );
}
