import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileImageUpdate = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{backgroundColor: '#0f1014', flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 5,
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

          <View style={{flex: 15}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../image/thesaruslogo.jpg')}
                //style={{width: '100%', height: '100%'}}
                style={{width: screenWidth}}
              />
            </View>
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
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
              Edit
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileImageUpdate;
