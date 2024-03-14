import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Path, Svg} from 'react-native-svg';

export default function Login({navigation}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <StatusBar
        backgroundColor="#0f1014" // Set your desired color here
        //barStyle="light-content" // Set the text color of the status bar
      />
      <View
        style={{flex: 1, backgroundColor: '#0f1014', flexDirection: 'column'}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: isFocused ? 1 : 3}}>
            <TouchableOpacity
              //activeOpacity={1}
              onPress={() => {
                navigation.goBack();
              }}
              style={{padding: 10}}>
              <Svg
                width="18px"
                height="18px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="white">
                <Path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, marginHorizontal: 15}}>
            <View style={{flex: 6}}>
              {isFocused ? null : (
                <Image
                  source={require('../image/thesaruslogo.jpg')}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 5,
                    marginBottom: 25,
                  }}
                />
              )}
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 18,
                  margin: 5,
                  fontWeight: 'bold',
                }}>
                Log in or sign up to continue
              </Text>

              <TextInput
                placeholder="Enter mobile number"
                placeholderTextColor="gray"
                style={{
                  padding: 10,
                  margin: 5,
                  marginBottom: 10,
                  color: '#ffffff',
                  //backgroundColor: '#121317',
                  borderRadius: 10,
                  fontSize: 15,
                  borderWidth: isFocused ? 1.5 : 0.5, // Border width
                  borderColor: 'gray', // Border color
                }}
                keyboardType="numeric"
                onFocus={() => setIsFocused(true)} // Set isFocused to true when focused
                onBlur={() => setIsFocused(false)}
              />

              <Text
                style={{
                  color: 'gray',
                  fontSize: 10,
                  margin: 5,
                }}>
                We'll send you an OTP by SMS to confirm your mobile number.
              </Text>
            </View>

            <View style={{marginVertical: 10, flex: 1}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 12,
                    margin: 5,
                  }}>
                  Having trouble logging in?{' '}
                  <Text style={{color: '#0a55d4', fontWeight: 'bold'}}>
                    Get Help
                  </Text>
                </Text>
                <TouchableOpacity
                  //activeOpacity={1}
                  onPress={() => {
                    navigation.navigate('MainApp');
                  }}
                  style={{
                    padding: 15,
                    backgroundColor: '#0a55d4',
                    borderRadius: 50,
                  }}>
                  <Svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white">
                    <Path
                      transform="rotate(180 512 512)"
                      d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
