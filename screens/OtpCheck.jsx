import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function OtpCheck() {
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
          Enter OTP send to +918798456387
        </Text>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            placeholder="0"
            placeholderTextColor="gray"
            style={{
              padding: 10,
              marginLeft: 15,
              margin: 5,
              marginBottom: 10,
              color: '#ffffff',
              //backgroundColor: '#121317',
              borderRadius: 10,
              fontSize: 18,
              borderWidth: 2, // Border width
              borderColor: 'gray', // Border color
              width: 50,
              height: 50,
            }}
          />
          <TextInput
            //keyboardType='number'
            placeholder="0"
            placeholderTextColor="gray"
            style={{
              padding: 10,
              margin: 5,
              marginBottom: 10,
              color: '#ffffff',
              //backgroundColor: '#121317',
              borderRadius: 10,
              fontSize: 18,
              borderWidth: 2, // Border width
              borderColor: 'gray', // Border color
              width: 50,
              height: 50,
            }}
          />
          <TextInput
            placeholder="0"
            placeholderTextColor="gray"
            style={{
              padding: 10,
              margin: 5,
              marginBottom: 10,
              color: '#ffffff',
              //backgroundColor: '#121317',
              borderRadius: 10,
              fontSize: 18,
              borderWidth: 2, // Border width
              borderColor: 'gray', // Border color
              width: 50,
              height: 50,
            }}
          />
          <TextInput
            placeholder="0"
            placeholderTextColor="gray"
            style={{
              padding: 10,
              marginRight: 15,
              margin: 5,
              marginBottom: 10,
              color: '#ffffff',
              //backgroundColor: '#121317',
              borderRadius: 10,
              fontSize: 18,
              borderWidth: 2, // Border width
              borderColor: 'gray', // Border color
              width: 50,
              height: 50,
            }}
          />
        </View>
      </View>

      <View style={{paddingVertical: 10, paddingBottom: 100}}>
        <Text
          style={{
            color: 'gray',
            fontSize: 15,
            marginHorizontal: 15,
            margin: 5,
          }}>
          Resend OTP in{' '}
          <Text style={{color: '#4949f2', fontWeight: 'bold'}}>00:26</Text>
        </Text>
        <View
          style={{
            //color: 'gray',
            //fontSize: 15,
            marginHorizontal: 15,
            //margin: 5,
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              //borderRightWidth: 1, // Border width
              //borderRightColor: 'gray',
              height: 26,
              flex: 1 / 6,
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 3,
            }}>
            <Svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={{color: 'gray', fontSize: 15, marginLeft: 5}}>
              SMS
            </Text>
          </View>

          <View
            style={{
              borderLeftWidth: 1, // Border width
              borderLeftColor: 'gray',
              height: 26,
              flex: 1 / 6,
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 3,
            }}>
            <Svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 01-3.28-2.8 28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"
                stroke="#292D32"
                strokeWidth={1.5}
                strokeMiterlimit={10}
              />
            </Svg>
            <Text style={{color: 'gray', fontSize: 15, marginLeft: 5}}>
              Call
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
