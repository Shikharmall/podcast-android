import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

import PodcastNavigation from './PodcastNavigation';
import New from '../screens/New';
import Search from '../screens/Search';
import Download from '../screens/Download';
import ProfileNavigation from './ProfileNavigation';

import HomeIcon from '../icons/HomeIcon';
import SearchIcon from '../icons/SearchIcon';
import NewIcon from '../icons/NewIcon';
import DownloadIcon from '../icons/DownloadIcon';
import MySpaceIcon from '../icons/MySpaceIcon';

const Tab = createBottomTabNavigator();

export default function MainAppNavigation() {
  return (
    <Tab.Navigator
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
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
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
          tabBarIcon: ({color, size}) => <NewIcon color={color} size={size} />,
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
        name="My Space"
        component={ProfileNavigation}
        activeOpacity={1}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
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
  );
}

const getTabBarVisibility = route => {
  //console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  //console.log(routeName);

  if (
    routeName === 'PodcastDetails' ||
    routeName === 'VideoStreaming' ||
    routeName === 'ProfileImageUpdate' ||
    routeName === 'CoverImageUpdate'
  ) {
    return 'none';
  }

  return 'flex';
};
