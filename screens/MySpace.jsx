import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Path, Svg} from 'react-native-svg';

export default function MySpace() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [isShow, setIsShow] = useState(false);
  const togglePopUp = () => {
    setIsShow(!isShow);
  };
  //console.log(isShow);
  return (
    <View
      style={{
        backgroundColor: '#0f1014',
        flex: 1,
      }}>
      <SafeAreaView
        style={{
          position: 'relative',
        }}>
        {/* header */}
        <View style={{position: 'relative'}}>
          <View
            style={{
              backgroundColor: 'gray',
              height: 150,
              width: screenWidth,
            }}></View>
          <View
            style={{
              backgroundColor: '#0f1014',
              height: 80,
              width: 80,
              borderRadius: 50,
              position: 'absolute',
              bottom: -40,
              left: 30,
              padding: 3,
            }}>
            <Image
              source={require('../image/user.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>

          <TouchableOpacity
            onPress={togglePopUp}
            activeOpacity={1}
            style={{
              //backgroundColor: '#0f1014',
              position: 'absolute',
              top: 0,
              right: 0,
              padding: 7,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="#ffffff"
              viewBox="0 0 52 52">
              <Path d="M20 44c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm0-18c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm0-18c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" />
            </Svg>
          </TouchableOpacity>

          {isShow ? (
            <View
              style={{
                backgroundColor: '#0f1014',
                position: 'absolute',
                top: 30,
                right: 15,
                padding: 7,
                width: 200,
                height: 100,
                borderRadius: 10,
              }}></View>
          ) : null}
        </View>

        <View
          style={{
            //backgroundColor: 'red',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              padding: 3,
              paddingHorizontal: 15,
              //backgroundColor: 'pink',
              borderRadius: 20,
              color: 'white',
              borderWidth: 1,
              borderColor: 'gray',
              fontWeight: 500,
            }}>
            Edit profile
          </Text>
          <Text
            style={{
              padding: 3,
              paddingHorizontal: 15,
              //backgroundColor: 'pink',
              borderRadius: 20,
              color: 'white',
              borderWidth: 1,
              borderColor: 'gray',
              fontWeight: 500,
            }}>
            Follow
          </Text>
          <Text
            style={{
              padding: 3,
              paddingHorizontal: 15,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 20,
              color: 'white',
              borderWidth: 1,
              borderColor: 'gray',
              fontWeight: 500,
            }}>
            Unfollow
          </Text>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <Text style={{color: 'white', fontSize: 20}}>Shikhar Mall</Text>
          <Text style={{color: 'gray', fontSize: 16}}>@shikharrr24</Text>

          <Text style={{color: 'white', fontSize: 16}}>
            Passionate software engineer 🚀 | Transforming ideas into code 💻 |
            Continuous learner & problem solver | Creator of digital solutions |
            #TechEnthusiast | Coffee lover ☕️
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Svg
              width="15px"
              height="15px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#919191">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z"
              />
            </Svg>
            <Text style={{color: 'gray', fontSize: 16, padding: 5}}>
              Joined November 2023
            </Text>
          </View>

          <Text style={{color: 'gray', fontSize: 16}}>
            {' '}
            <Text style={{color: 'white'}}>24</Text> Followers
          </Text>
        </View>

        {/*<View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: screenWidth,
            backgroundColor: 'rgba(0,0,0,0.2)',
            height: screenHeight,
            opacity: 0.6,
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center'
          }}>
          <Image
            source={require('../image/logo1.png')}
            style={{width: screenWidth, height: 500}}
          />
        </View>*/}
      </SafeAreaView>
    </View>
  );
}
