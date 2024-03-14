import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

import Svg, {Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

export default function UserDetails({navigation}) {
  return (
    <>
      {/*<View
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
              <Svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                baseProfile="tiny"
                fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="M16.972 6.251a1.999 1.999 0 00-2.72.777l-3.713 6.682-2.125-2.125a2 2 0 10-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 001.471-1.009l5-9a2 2 0 00-.776-2.72z" />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10, flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                //activeOpacity={1}
                onPress={() => {
                  navigation.navigate('UserDetails');
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
        </ScrollView>
      </SafeAreaView>
              </View>*/}
      <>
        <StatusBar
          backgroundColor="#0f1014" // Set your desired color here
          //barStyle="light-content" // Set the text color of the status bar
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#0f1014',
            flexDirection: 'column',
          }}>
          <SafeAreaView style={{flex: 1, marginHorizontal: 15}}>
            <View style={{flex: 11}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 1024 1024"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path d="M106.667 512c0-200.295 162.371-362.667 362.667-362.667 57.937 0 112.644 13.57 161.173 37.687 10.551 5.243 23.356.941 28.599-9.61 5.239-10.551.939-23.355-9.613-28.599-54.293-26.982-115.486-42.144-180.16-42.144C245.473 106.667 64 288.141 64 512s181.474 405.333 405.333 405.333c64.674 0 125.867-15.164 180.16-42.146 10.551-5.244 14.852-18.044 9.613-28.595-5.244-10.551-18.048-14.857-28.599-9.613-48.529 24.115-103.236 37.687-161.173 37.687-200.295 0-362.667-162.372-362.667-362.667z" />
                  <Path d="M783.087 326.249c-8.333-8.332-21.841-8.332-30.174 0-8.329 8.331-8.329 21.839 0 30.17l134.251 134.249h-353.83c-11.78 0-21.333 9.553-21.333 21.333s9.553 21.333 21.333 21.333h353.83L752.913 667.58c-8.329 8.333-8.329 21.841 0 30.174 8.333 8.329 21.841 8.329 30.174 0l170.667-170.667a21.29 21.29 0 004.655-6.985A21.31 21.31 0 00960 512a21.252 21.252 0 00-5.79-14.613l-.512-.525-170.611-170.613z" />
                </Svg>
                <Text
                  style={{
                    fontSize: 10,
                    margin: 3,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Log Out
                </Text>
              </TouchableOpacity>

              <View style={{flex: 10}}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    ALMOST THERE
                  </Text>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                    Tell us more about you
                  </Text>
                </View>
                <View style={{flex: 6, justifyContent: 'center'}}>
                  <TextInput
                    placeholder="Your name"
                    placeholderTextColor="gray"
                    style={{
                      padding: 10,
                      margin: 5,
                      marginBottom: 10,
                      color: '#ffffff',
                      //backgroundColor: '#121317',
                      borderRadius: 10,
                      fontSize: 15,
                      borderWidth: false ? 1.5 : 0.5, // Border width
                      borderColor: 'gray', // Border color
                    }}
                  />
                  <TextInput
                    placeholder="Your email"
                    placeholderTextColor="gray"
                    style={{
                      padding: 10,
                      margin: 5,
                      marginBottom: 10,
                      color: '#ffffff',
                      //backgroundColor: '#121317',
                      borderRadius: 10,
                      fontSize: 15,
                      borderWidth: false ? 1.5 : 0.5, // Border width
                      borderColor: 'gray', // Border color
                    }}
                  />
                  <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    style={{
                      padding: 10,
                      margin: 5,
                      marginBottom: 10,
                      color: '#ffffff',
                      //backgroundColor: '#121317',
                      borderRadius: 10,
                      fontSize: 15,
                      borderWidth: false ? 1.5 : 0.5, // Border width
                      borderColor: 'gray', // Border color
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{}}>
              <View style={{marginVertical: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    //alignItems: 'center',
                  }}>
                  {/*<TouchableOpacity
                    //activeOpacity={1}
                    onPress={() => {
                      navigation.navigate('MainApp');
                    }}
                    style={{
                      padding: 8,
                      backgroundColor: '#0a55d4',
                      borderRadius: 50,
                    }}>
                    <Svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      baseProfile="tiny"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path d="M16.972 6.251a1.999 1.999 0 00-2.72.777l-3.713 6.682-2.125-2.125a2 2 0 10-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 001.471-1.009l5-9a2 2 0 00-.776-2.72z" />
                    </Svg>
                  </TouchableOpacity>*/}
                  <TouchableOpacity
                    style={{
                      borderRadius: 10,
                      marginVertical: 25,
                      overflow: 'hidden', // Ensures the gradient doesn't overflow the TouchableOpacity boundaries
                    }}
                    onPress={() => {
                      //navigation.navigate('Login');
                    }}>
                    <LinearGradient
                      colors={['#0a55d4', '#174696']} // Specify your two color shades here
                      start={{x: 0, y: 0}} // Gradient start point
                      end={{x: 1, y: 0}} // Gradient end point
                      style={{
                        paddingHorizontal: 100,
                        paddingVertical: 18,
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        Create Your Profile
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </>
    </>
  );
}
