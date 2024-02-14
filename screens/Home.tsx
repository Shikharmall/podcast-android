import { View, Text, Button } from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Go to Search'
        onPress={() => navigation.navigate('Search')}
      >

      </Button>
    </View>
  )
}

export default Home