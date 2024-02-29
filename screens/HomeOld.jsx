import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../partials/Header';
import Navbar from '../partials/Navbar';

//import {NativeStackScreenProps} from "@react-navigation/native-stack";
//import {RootStackParamList} from '../App';

//type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = () => {
  return (
    <View>
      <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />

          {/*<Navbar/>*/}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Home;


const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  },
});