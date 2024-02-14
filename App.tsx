/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

/*
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navbar from './partials/Navbar';
import Header from './partials/Header';
import Home from './screens/Home';
import Search from './screens/Search';

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

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <>
      {/*<SafeAreaView style={styles.backgroundStyle}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />

          <Navbar />
        </ScrollView>
      </SafeAreaView>*/}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Home Hai Yeh!'
            }}
          />
          <Stack.Screen
            name='Search'
            component={Search}
            options={{
              title: 'Search Hai Yeh!'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  },
});

export default App;
