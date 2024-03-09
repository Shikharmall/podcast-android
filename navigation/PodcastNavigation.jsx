import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PodcastDetails from '../screens/PodcastDetails';
import VideoStreaming from '../screens/VideoStreaming';

const Stack = createNativeStackNavigator();

const PodcastNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PodcastDetails"
        component={PodcastDetails}
        options={{
          headerShown: false,
          //headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="VideoStreaming"
        component={VideoStreaming}
        options={{
          headerShown: false,
          //headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PodcastNavigation;
