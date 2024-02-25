import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
const screenWidth = Dimensions.get('window').width;

const TrailorVideo = () => {
  return (
    <View>
      <Image
        source={require('../image/mainLogo1.png')}
        style={{height: 250, width: screenWidth-20 , margin: 10 ,borderRadius: 20}}
      />
    </View>
  );
};

export default TrailorVideo;
