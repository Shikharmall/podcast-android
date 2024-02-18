import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function New() {
  return (
    <View style={{backgroundColor: '#0f1014', flex: 1 ,flexDirection: 'row'}}>
      <View style={{flex: 1/4,margin: 2}}>
        <Text style={{color: 'gray', backgroundColor: 'green'}}>
          No New Podcasts
        </Text>
      </View>
      <View style={{flex: 1/4,margin: 2}}>
        <Text style={{color: 'gray', backgroundColor: 'green'}}>
          No New Podcasts
        </Text>
      </View>
      <View style={{flex: 1/4,margin: 2}}>
        <Text style={{color: 'gray', backgroundColor: 'green'}}>
          No New Podcasts
        </Text>
      </View>
      <View style={{flex: 1/4,margin: 2}}>
        <Text style={{color: 'gray', backgroundColor: 'green'}}>
          No New Podcasts
        </Text>
      </View>
    </View>
  );
}
