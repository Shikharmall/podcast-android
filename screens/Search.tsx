import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Search() {

  const [searchText, setSearchText] = useState("");


  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        placeholder="Podcasts , channels and more"
        value={searchText}
        placeholderTextColor="gray"
        //onChangeText={(text) => setSearchText(text)}
        style={{  padding: 10, margin: 5, marginBottom: 10, color: 'gray', backgroundColor: '#121317', borderRadius: 10 , fontSize: 18}}
      />
      <View>
        <Text style={styles.textHeading}>People Search For</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
  }, textHeading: {
    color: '#ffffff',
    fontSize: 20,
    margin: 5,
  }
});