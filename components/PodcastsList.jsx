import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

export default function PodcastsList({type}) {
  return (
    <View>
      <Text style={styles.textHeading}>{type}</Text>
      <ScrollView horizontal={true}>
        <View style={styles.containerBox}>
          <View style={styles.itemBox}>
            <Image
              source={require('../image/logo1.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.itemBox}>
            <Image
              source={require('../image/logo2.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.itemBox}>
            <Image
              source={require('../image/logo3.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.itemBox}>
            <Image
              source={require('../image/logo4.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.itemBox}>
            <Image
              source={require('../image/logo5.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.itemBox}>
            <Image
              source={require('../image/logo6.png')}
              style={styles.image}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    color: '#ffffff',
    fontSize: 20,
    margin: 5,
  },
  containerBox: {
    flex: 1,
    flexDirection: 'row',
  },
  itemBox: {
    //flex: 1,
    width: 130,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121317',
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    //width: 130,
    //height: 160,
    width: '100%',
    height: '100%',
  },
});
