/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import LoginNavigation from './navigation/LoginNavigation';
import MainAppNavigation from './navigation/MainAppNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <>
      <NavigationContainer>
        {/*<LoginNavigation />*/}
        <MainAppNavigation />
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
