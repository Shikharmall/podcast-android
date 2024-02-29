import {View, Text, Image} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const Episode = () => {
  return (
    <View style={{margin: 10, flexDirection: 'row'}}>
      <View style={{flex: 1, position: 'relative'}}>
        <Image
          source={require('../image/mainLogo1.png')}
          style={{
            height: 80,
            width: '100%',
            margin: 2,
            borderRadius: 5,
          }}
        />
        <View style={{position: 'absolute', bottom: 0, left: 0, margin: 5}}>
          <Svg
            fill={'white'}
            width="25px"
            height="20px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="M5.008 12.897a.644.644 0 01-.91-.227.719.719 0 01-.098-.364V3.693C4 3.31 4.296 3 4.662 3a.64.64 0 01.346.103l6.677 4.306a.713.713 0 010 1.182l-6.677 4.306z" />
          </Svg>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text
          style={{
            //color: '#e2e6f1',
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            margin: 10,
            marginVertical: 0,
          }}>
          Episode 1: Kahaani abhi taak nahi hui hai
        </Text>
        <Text
          style={{
            //color: '#e2e6f1',
            color: 'gray',
            fontSize: 15,
            fontWeight: 'bold',
            margin: 10,
          }}>
          S1 E1 &#x2022; 3 Nov 2023 &#x2022; 43m
        </Text>
      </View>
    </View>
  );
};

export default Episode;
