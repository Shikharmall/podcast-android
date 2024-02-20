import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

export default function MySpace() {
  return (
    <View
      style={{
        backgroundColor: '#0f1014',
        flex: 1,
      }}>
      <SafeAreaView>
        <View
          style={{backgroundColor: 'gray', height: 150, width: '100%'}}></View>
        
      </SafeAreaView>
    </View>
  );
}
