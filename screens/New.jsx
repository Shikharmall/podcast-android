import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function New() {
  return (
    <View style={[styles.backgroundStyle,{flex: 1,justifyContent: 'center', alignItems: 'center'}]}>
      <Text style={{color: 'gray'}}>No New Podcasts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  },
});