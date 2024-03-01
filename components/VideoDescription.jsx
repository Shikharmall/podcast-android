import {View, Text} from 'react-native';
import React from 'react';

const VideoDescription = () => {
  return (
    <View style={{marginVertical: 10}}>
      <View>
        <Text
          style={{
            //color: '#e2e6f1',
            color: 'gray',
            fontSize: 17,
            fontWeight: 'bold',
            margin: 10,
            marginVertical: 2,
          }}>
          <Text style={{color: 'white', padding: 20, paddingVertical: 0}}>
            Aarya
          </Text>
        </Text>
      </View>
      <View>
        <Text
          style={{
            //color: '#e2e6f1',
            color: 'gray',
            fontSize: 13,
            fontWeight: 'bold',
            margin: 10,
            marginVertical: 0,
          }}>
          S2 E1 - ANTIM VAAR OUT {'\n'}
          The Sherni is back again, and she is all set to end it all. Will she
          succeded?
        </Text>
      </View>
    </View>
  );
};

export default VideoDescription;
