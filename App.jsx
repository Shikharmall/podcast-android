/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

/*
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Navbar from './partials/Navbar';
import Header from './partials/Header';
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

/*
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}*/

//export type RootStackParamList = {
//  Home: undefined;
//  Search: undefined;
//}

//const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

function App() {
  //: JSX.Element
  return (
    <>
      {/*<NavigationContainer>
        <Tab.Navigator tabBar={props => <CustomBottomTabBar {...props} />}>
          <Tab.Screen
            name="Home"
            component={Home}
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
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
          </NavigationContainer>*/}
      {/*<Login />*/}
      {/*<OtpCheck />*/}
      {/*<UserDetails />*/}

      <PodcastDetails />
    </>
  );
}

export default App;
