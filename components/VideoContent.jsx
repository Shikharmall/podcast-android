import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
const screenWidth = Dimensions.get('window').width;
import Video from 'react-native-video';

export default function VideoContent() {
  return (
    <View>
      {/*<Image
        source={require('../image/mainLogo1.png')}
        style={{
          height: 250,
          width: screenWidth - 20,
          margin: 10,
          borderRadius: 20,
        }}
      />*/}
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={{
          height: 250,
          //width: screenWidth - 20,
          //margin: 10,
          //borderRadius: 20,
          width: screenWidth,
        }}
        //rate={1.0}
        //volume={1.0}
        //muted={false}
        //paused={false}
        //resizeMode="contain"
        //repeat={false}
        //fullscreen={false}
        //onLoad={(data) => console.log('Video is loaded')}
        //onError={(error) => console.log('Error occurred: ', error)}
        //onProgress={(data) => console.log('Video progress: ', data)}
        controls={true} // You can add controls if needed
      />
    </View>
  );
}
