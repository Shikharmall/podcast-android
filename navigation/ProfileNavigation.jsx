import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MySpace from '../screens/MySpace';
import ProfileImageUpdate from '../components/ProfileImageUpdate';
import CoverImageUpdate from '../components/CoverImageUpdate';

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="MySpaceScreen">
      <Stack.Screen
        name="MySpaceScreen"
        component={MySpace}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileImageUpdate"
        component={ProfileImageUpdate}
        options={{
          headerShown: false,
          //headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="CoverImageUpdate"
        component={CoverImageUpdate}
        options={{
          headerShown: false,
          //headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
