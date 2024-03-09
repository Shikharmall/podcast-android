/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Search from './screens/Search';
import New from './screens/New';
import Download from './screens/Download';
import MySpace from './screens/MySpace';
import CustomBottomTabBar from './partials/CustomBottomTabBar';

import Login from './screens/Login';
import OtpCheck from './screens/OtpCheck';
import UserDetails from './screens/UserDetails';
import PodcastDetails from './screens/PodcastDetails';
import VideoStreaming from './screens/VideoStreaming';

import PodcastNavigation from './navigation/PodcastNavigation';
import ProfileImage from './components/ProfileImageUpdate';

const Tab = createBottomTabNavigator();
/*const Stack = createNativeStackNavigator();

const BooksStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BooksList"
      component={BooksListScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="BookDetails"
      component={BookDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);*/

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
            component={MySpace}
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
      {/*<ProfileImage />*/}
    </>
  );
}

export default App;
