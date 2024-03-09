/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from './screens/Search';
import New from './screens/New';
import Download from './screens/Download';
import CustomBottomTabBar from './partials/CustomBottomTabBar';

import Login from './screens/Login';
import OtpCheck from './screens/OtpCheck';
import UserDetails from './screens/UserDetails';
import PodcastDetails from './screens/PodcastDetails';
import VideoStreaming from './screens/VideoStreaming';

import PodcastNavigation from './navigation/PodcastNavigation';
import ProfileNavigation from './navigation/ProfileNavigation';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <CustomBottomTabBar {...props} />}>
          <Tab.Screen
            name="Home"
            component={PodcastNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="New"
            component={New}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Download"
            component={Download}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="MySpace"
            component={ProfileNavigation}
            activeOpacity={1}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      {/*<Login />*/}
      {/*<OtpCheck />*/}
      {/*<UserDetails />*/}
      {/*<PodcastDetails />*/}
      {/*<VideoStreaming />*/}
    </>
  );
}

export default App;
