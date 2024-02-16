import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View
      style={{backgroundColor: '#0f1014', flex: 1, justifyContent: 'flex-end'}}>
      <View style={{paddingBottom: 80}}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
            marginHorizontal: 15,
            margin: 5,
          }}>
          Log in or sign up to continue
        </Text>
        <TextInput
          placeholder="Mobile Number"
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
        <Text
          style={{
            color: 'gray',
            fontSize: 12,
            marginHorizontal: 15,
            margin: 5,
          }}>
          We'll send you an OTP by SMS to confirm your mobile number
        </Text>
      </View>

      <View style={{paddingVertical: 10}}>
        <Text
          style={{
            color: 'gray',
            fontSize: 15,
            marginHorizontal: 15,
            margin: 5,
          }}>
          Having trouble logging in?{' '}
          <Text style={{color: '#4949f2', fontWeight: 'bold'}}>Get Help</Text>
        </Text>
      </View>
    </View>
  );
}
