import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchResults from '../components/SearchResults';
import {Path, Svg} from 'react-native-svg';
import SearchResultsRev from '../components/SearchResultsRev';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [showCross, setShowCross] = useState(false);

  return (
    <View
      style={{
        backgroundColor: '#0f1014',
        flex: 1,
      }}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* search input */}
          <View style={{position: 'relative'}}>
            <TextInput
              placeholder="Podcasts , channels and more"
              value={searchText}
              placeholderTextColor="gray"
              onChangeText={text => {
                setSearchText(text);
                if (text === '') {
                  setShowCross(false);
                } else {
                  setShowCross(true);
                }
              }}
              style={{
                padding: 10,
                paddingLeft: 44,
                paddingRight: 44,
                margin: 5,
                marginHorizontal: 15,
                marginBottom: 10,
                marginTop: 10,
                color: 'white',
                //backgroundColor: '#121317',
                backgroundColor: '#2a2c33',
                borderRadius: 10,
                fontSize: 18,
              }}
            />
            <Svg
              width="25px"
              height="25px"
              style={{position: 'absolute', top: 20, left: 24}}
              viewBox="0 0 24 24"
              //xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 117-7 7 7 0 01-7 7z"
                fill={'white'}
              />
            </Svg>
            {showCross ? (
              <TouchableOpacity
                onPress={() => {
                  setSearchText('');
                  setShowCross(false);
                }}
                style={{position: 'absolute', top: 20, right: 24}}>
                <Svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}>
                  <Path d="M11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" fill={'white'} />
                </Svg>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* heading */}

          <View>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
                margin: 5,
                marginHorizontal: 15,
              }}>
              People Search For
            </Text>
          </View>

          <SearchResults />
          <SearchResultsRev />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
