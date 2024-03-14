/*export default function OtpCheck() {
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
            keyboardType='numeric'
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
            keyboardType='numeric'
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
            keyboardType='numeric'
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
            keyboardType='numeric'
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
}*/

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Path, Svg} from 'react-native-svg';

export default function Login({navigation}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <>
      <StatusBar
        backgroundColor="#0f1014" // Set your desired color here
        //barStyle="light-content" // Set the text color of the status bar
      />
      <View
        style={{flex: 1, backgroundColor: '#0f1014', flexDirection: 'column'}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: isFocused || isFocused1 || isFocused2 || isFocused3 ? 1 : 3,
            }}>
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
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 18,
                  margin: 5,
                  fontWeight: 'bold',
                }}>
                Enter OTP sent to
              </Text>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <TextInput
                  placeholder="0"
                  placeholderTextColor="gray"
                  keyboardType="numeric"
                  style={{
                    padding: 10,
                    paddingLeft: 19,
                    margin: 5,
                    marginBottom: 10,
                    color: '#ffffff',
                    //backgroundColor: '#121317',
                    borderRadius: 10,
                    fontSize: 20,
                    borderWidth: isFocused ? 2 : 0.5, // Border width
                    borderColor: 'gray', // Border color
                    width: 50,
                    height: 50,
                  }}
                  onFocus={() => setIsFocused(true)} // Set isFocused to true when focused
                  onBlur={() => setIsFocused(false)}
                />
                <TextInput
                  placeholder="0"
                  placeholderTextColor="gray"
                  keyboardType="numeric"
                  style={{
                    padding: 10,
                    paddingLeft: 19,
                    margin: 5,
                    marginBottom: 10,
                    color: '#ffffff',
                    //backgroundColor: '#121317',
                    borderRadius: 10,
                    fontSize: 20,
                    borderWidth: isFocused1 ? 2 : 0.5, // Border width
                    borderColor: 'gray', // Border color
                    width: 50,
                    height: 50,
                  }}
                  onFocus={() => setIsFocused1(true)} // Set isFocused to true when focused
                  onBlur={() => setIsFocused1(false)}
                />
                <TextInput
                  placeholder="0"
                  placeholderTextColor="gray"
                  keyboardType="numeric"
                  style={{
                    padding: 10,
                    paddingLeft: 19,
                    margin: 5,
                    marginBottom: 10,
                    color: '#ffffff',
                    //backgroundColor: '#121317',
                    borderRadius: 10,
                    fontSize: 20,
                    borderWidth: isFocused2 ? 2 : 0.5, // Border width
                    borderColor: 'gray', // Border color
                    width: 50,
                    height: 50,
                  }}
                  onFocus={() => setIsFocused2(true)} // Set isFocused to true when focused
                  onBlur={() => setIsFocused2(false)}
                />
                <TextInput
                  placeholder="0"
                  placeholderTextColor="gray"
                  keyboardType="numeric"
                  style={{
                    padding: 10,
                    paddingLeft: 19,
                    margin: 5,
                    marginBottom: 10,
                    color: '#ffffff',
                    //backgroundColor: '#121317',
                    borderRadius: 10,
                    fontSize: 20,
                    borderWidth: isFocused3 ? 2 : 0.5, // Border width
                    borderColor: 'gray', // Border color
                    width: 50,
                    height: 50,
                  }}
                  onFocus={() => setIsFocused3(true)} // Set isFocused to true when focused
                  onBlur={() => setIsFocused3(false)}
                />
              </View>

              <View>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 12,
                    margin: 5,
                  }}>
                  Resend OTP in{' '}
                  <Text style={{color: '#0a55d4', fontWeight: 'bold'}}>
                    {seconds} sec
                  </Text>
                </Text>

                <View
                  style={{
                    //color: 'gray',
                    //fontSize: 15,
                    marginVertical: 15,
                    //margin: 5,
                    //flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      borderRightWidth: 0.5, // Border width
                      borderRightColor: 'gray',
                      height: 16,
                      //flex: 1 / 6,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      paddingHorizontal: 8,
                      //backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Svg
                      width="16px"
                      height="16px"
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
                    <Text style={{color: 'gray', fontSize: 12, marginLeft: 5}}>
                      SMS
                    </Text>
                  </View>

                  <View
                    style={{
                      borderLeftWidth: 0.5, // Border width
                      borderLeftColor: 'gray',
                      height: 16,
                      //flex: 1 / 6,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      paddingHorizontal: 8,
                      //backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Svg
                      width="16px"
                      height="16px"
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
                    <Text style={{color: 'gray', fontSize: 12, marginLeft: 5}}>
                      Call
                    </Text>
                  </View>
                </View>
              </View>
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
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
