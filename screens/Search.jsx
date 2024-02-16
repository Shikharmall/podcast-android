import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import SearchResults from '../components/SearchResults';

export default function Search() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.backgroundStyle}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput
            placeholder="Podcasts , channels and more"
            value={searchText}
            placeholderTextColor="gray"
            onChangeText={text => setSearchText(text)}
            style={{
              padding: 10,
              margin: 5,
              marginHorizontal: 15,
              marginBottom: 10,
              marginTop: 10,
              color: 'gray',
              backgroundColor: '#121317',
              borderRadius: 10,
              fontSize: 18,
            }}
          />

          <View>
            <Text style={styles.textHeading}>People Search For</Text>
          </View>

          <SearchResults />
          <SearchResults />

          {/*<View>
        <Text style={styles.textHeading}>People Search For</Text>
      </View>*/}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#0f1014',
    flex: 1,
  },
  textHeading: {
    color: '#ffffff',
    fontSize: 18,
    margin: 5,
    marginHorizontal: 15,
  },
});
