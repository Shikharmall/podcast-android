import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

export default function MySpace() {
  return (
    <View
      style={[
        styles.backgroundStyle,
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
      ]}>
      <SafeAreaView>
        <Text style={{color: 'gray'}}>My Space</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  },
});
