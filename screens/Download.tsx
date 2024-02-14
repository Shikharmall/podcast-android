import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Download = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>

      <View >
        <Text>Download</Text>
      </View>
    </SafeAreaView>

  )
}

export default Download;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  },
});