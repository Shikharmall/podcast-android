import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const Download = () => {
  return (
    <View
      style={[
        styles.backgroundStyle,
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
      ]}>
      <SafeAreaView>
        <Text style={{color: 'gray'}}>No Downloads</Text>
      </SafeAreaView>
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  },
});
