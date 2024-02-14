import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function MainHeader() {
  return (
    <View>
      <Image source={require('../image/mainLogo1.png')} style={styles.image} />
      <Button title="Watch Now" style={styles.watchBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  //container: {
  //  flex: 1,
  //  //justifyContent: 'center',
  //  //alignItems: 'center',
  //},
  image: {
    width: '100%',
    height: 250,
  },
  watchBtn: {
    color: '#e2e6f1',
    //backgroundColor: 'rgba(0, 0, 255, 0.5)'
    backgroundColor: 'gray',
    width: '50%',
    //position: 'absolute',
    //top: 0,
    //left: 0,
    position: 'relative',
    top: -20,
  },
});
