/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
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
import MySpaceIcon from './icons/MySpaceIcon';
import HomeIcon from './icons/HomeIcon';
import SearchIcon from './icons/SearchIcon';
import NewIcon from './icons/NewIcon';
import DownloadIcon from './icons/DownloadIcon';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          //tabBar={props => <CustomBottomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#868c99',
            tabBarActiveTintColor: '#e2e6f1',
            tabBarLabelStyle: {fontSize: 14, paddingBottom: 10},
          }}>
          <Tab.Screen
            name="Home"
            component={PodcastNavigation}
            options={({route}) => ({
              tabBarStyle: {
                display: getTabBarVisibility(route),
                backgroundColor: '#0f1014',
                paddingVertical: 10,
                height: 60,
              },
              tabBarIcon: ({color, size}) => (
                <HomeIcon color={color} size={size} />
              ),
            })}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={({route}) => ({
              tabBarStyle: {
                //display: getTabBarVisibility(route),
                backgroundColor: '#0f1014',
                paddingVertical: 10,
                height: 60,
              },
              tabBarIcon: ({color, size}) => (
                <SearchIcon color={color} size={size} />
              ),
            })}
          />
          <Tab.Screen
            name="New"
            component={New}
            options={({route}) => ({
              tabBarStyle: {
                //display: getTabBarVisibility(route),
                backgroundColor: '#0f1014',
                paddingVertical: 10,
                height: 60,
              },
              tabBarIcon: ({color, size}) => (
                <NewIcon color={color} size={size} />
              ),
            })}
          />
          <Tab.Screen
            name="Download"
            component={Download}
            options={({route}) => ({
              tabBarStyle: {
                //display: getTabBarVisibility(route),
                backgroundColor: '#0f1014',
                paddingVertical: 10,
                height: 60,
              },
              tabBarIcon: ({color, size}) => (
                <DownloadIcon color={color} size={size} />
              ),
            })}
          />
          <Tab.Screen
            name="MySpace"
            component={ProfileNavigation}
            activeOpacity={1}
            options={({route}) => ({
              tabBarStyle: {
                //display: getTabBarVisibility(route),
                backgroundColor: '#0f1014',
                paddingVertical: 10,
                height: 60,
              },
              tabBarIcon: ({color, size}) => (
                <MySpaceIcon color={color} size={size} />
              ),
            })}
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

const getTabBarVisibility = route => {
  //console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  //console.log(routeName);

  if (routeName === 'PodcastDetails' || routeName === 'VideoStreaming') {
    return 'none';
  }

  return 'flex';
};

export default App;
