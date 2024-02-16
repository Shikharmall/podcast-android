import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function New() {
  return (
    <View style={styles.backgroundStyle}>
      <Text>New</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  },
});