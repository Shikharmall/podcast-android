import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function UserDetails() {
  return (
    <View
      style={{backgroundColor: '#0f1014', flex: 1, justifyContent: 'flex-end'}}>
      <SafeAreaView style={{marginBottom: 10}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{paddingBottom: 10}}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
                marginHorizontal: 15,
                margin: 5,
              }}>
              Tell about yourself
            </Text>

            <View>
              <TextInput
                placeholder="Your name"
                placeholderTextColor="gray"
                style={{
                  padding: 10,
                  marginHorizontal: 15,
                  margin: 5,
                  marginBottom: 10,
                  color: '#ffffff',
                  //backgroundColor: '#121317',
                  borderRadius: 10,
                  fontSize: 18,
                  borderWidth: 2, // Border width
                  borderColor: 'gray', // Border color
                }}
              />
              <TextInput
                placeholder="Your email"
                placeholderTextColor="gray"
                style={{
                  padding: 10,
                  marginHorizontal: 15,
                  margin: 5,
                  marginBottom: 10,
                  color: '#ffffff',
                  //backgroundColor: '#121317',
                  borderRadius: 10,
                  fontSize: 18,
                  borderWidth: 2, // Border width
                  borderColor: 'gray', // Border color
                }}
              />
              <TextInput
                placeholder="password"
                placeholderTextColor="gray"
                style={{
                  padding: 10,
                  marginHorizontal: 15,
                  margin: 5,
                  marginBottom: 10,
                  color: '#ffffff',
                  //backgroundColor: '#121317',
                  borderRadius: 10,
                  fontSize: 18,
                  borderWidth: 2, // Border width
                  borderColor: 'gray', // Border color
                }}
              />
            </View>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              margin: 15,
            }}>
            <TouchableOpacity
              //onPress={handlePress}
              style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}>
              <Text style={{color: 'white', fontSize: 16}}>Move Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
