import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';

export default function SearchResultsRev() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        //marginHorizontal: 2,
      }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            width: 120,
            height: 148 + 25,
            backgroundColor: 'gray',

            marginTop: 2,
            marginBottom: 2,

            marginLeft: 10,
            marginRight: 2,

            borderRadius: 5,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../image/logo4.png')}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
        <View
          style={{
            width: 120,
            height: 148 + 25,
            backgroundColor: 'gray',

            marginTop: 2,
            marginBottom: 2,

            marginLeft: 10,
            marginRight: 2,

            borderRadius: 5,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../image/logo6.png')}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </View>
      <View
        style={{
          width: 265,
          height: 350,
          backgroundColor: 'gray',

          marginLeft: 2,
          marginRight: 10,

          marginTop: 2,
          marginBottom: 2,

          borderRadius: 5,
          overflow: 'hidden',
        }}>
        <Image
          source={require('../image/logo5.png')}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </View>
    </View>
  );
}
