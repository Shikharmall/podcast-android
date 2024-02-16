import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';

export default function SearchResults() {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 2,
        }}>
        <View
          style={{
            width: 265,
            height: 300,
            backgroundColor: 'gray',
            margin: 10,
            marginRight: 2,
            marginBottom: 2,
            borderRadius: 5,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../image/logo2.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              width: 120,
              height: 148,
              backgroundColor: 'gray',
              margin: 10,
              marginLeft: 2,
              marginBottom: 2,
              borderRadius: 5,
              overflow: 'hidden',
            }}>
            <Image
              source={require('../image/logo3.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View
            style={{
              width: 120,
              height: 148,
              backgroundColor: 'gray',
              margin: 10,
              marginLeft: 2,
              marginTop: 2,
              borderRadius: 5,
              overflow: 'hidden',
            }}>
            <Image
              source={require('../image/logo5.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerBox: {
    flex: 1,
    width: 200,
    height: 200,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'red',
    margin: 2,
  },
  textHeading: {
    color: '#ffffff',
    fontSize: 20,
    //margin: 5,
  },
});
