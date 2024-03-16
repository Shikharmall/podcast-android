import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {Path, Svg} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function MySpaceLogin(
  {
    /*navigation*/
  },
) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#0f1014',
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../image/thesaruslogo.jpg')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 5,
            }}
          />

          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fillRule="evenodd"
                d="M20.873 18.68l-2.217 2.217-2.838-.79-.811.334L13.55 23h-3.135l-1.449-2.567-.81-.34-2.838.781-2.216-2.216.79-2.838-.334-.811L1 13.55v-3.135l2.568-1.449.34-.81-.781-2.838 2.215-2.215 2.838.791.81-.334L10.446 1h3.136l1.449 2.568.81.34 2.837-.781 2.22 2.215-.792 2.839.335.81L23 10.447v3.136l-2.567 1.448-.34.813.78 2.837zm-2.892-2.972l.872-2.082L21 12.414v-.804l-2.147-1.22-.859-2.083.662-2.375-.569-.568-2.383.655-2.08-.872L12.413 3h-.804l-1.22 2.147-2.083.859-2.376-.663-.566.566.655 2.383-.872 2.08L3 11.583v.805l2.145 1.222.859 2.083-.662 2.376.567.567 2.383-.655 2.08.872 1.21 2.146h.805l1.222-2.145 2.083-.859 2.376.662.568-.568-.655-2.381zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
              />
            </Svg>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
                marginLeft: 3,
              }}>
              Help & Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 5,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/*<Image
              source={require('../image/logoApp.png')}
              style={{
                height: 400,
                width: '100%',
                //margin: 5
                //borderRadius: 5,
              }}
            />*/}
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 15,
            }}>
            Login to The SARUS
          </Text>
          <Text style={{color: 'gray', fontSize: 12, alignSelf: 'center'}}>
            Start watching the latest and entertaining podcasts.
          </Text>
          {/*<TouchableOpacity
              style={{
                backgroundColor: '#0a55d4',
                paddingHorizontal: 80,
                paddingVertical: 18,
                borderRadius: 10,
                marginVertical: 30
              }}>
              <Text style={{color: 'white', fontSize: 15 , fontWeight: 'bold'}}>Log In</Text>
            </TouchableOpacity>*/}

          <TouchableOpacity
            style={{
              borderRadius: 10,
              marginVertical: 25,
              overflow: 'hidden', // Ensures the gradient doesn't overflow the TouchableOpacity boundaries
            }}
            onPress={() => {
              //navigation.navigate('Login');
              navigation.push('Login');
            }}>
            <LinearGradient
              colors={['#0a55d4', '#174696']} // Specify your two color shades here
              start={{x: 0, y: 0}} // Gradient start point
              end={{x: 1, y: 0}} // Gradient end point
              style={{
                paddingHorizontal: 80,
                paddingVertical: 18,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                Log In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text
            style={{
              color: 'gray',
              fontSize: 12,
              margin: 5,
              marginVertical: 20,
            }}>
            Having trouble logging in?{' '}
            <Text style={{color: '#0a55d4', fontWeight: 'bold'}}>Get Help</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
