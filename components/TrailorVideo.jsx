import {View, Text, Image, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import {Path, Svg} from 'react-native-svg';
const screenWidth = Dimensions.get('window').width;
//import Video from 'react-native-video';

//import VideoPlayer from 'react-native-video-player';

const TrailorVideo = () => {
  /*const [clicked, setClicked] = useState(false);
  const [puased, setPaused] = useState(false);
  const [progress, setProgress] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };*/
  return (
    <View style={{position: 'relative'}}>
      <Image
        source={require('../image/mainLogo1.png')}
        style={{
          height: 250,
          width: screenWidth - 20,
          margin: 10,
          borderRadius: 20,
        }}
      />
      <Svg
        style={{position: 'absolute', top: 20, right: 20}}
        width="30px"
        height="30px"
        viewBox="-3.5 0 19 19"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="cf-icon-svg">
        <Path d="M11.383 13.644A1.03 1.03 0 019.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 11-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 111.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 011.455 1.456L7.455 9.716z" />
      </Svg>
      {/*<Video />*/}

      {/*<Video
        paused={puased}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        //ref={ref}
        onProgress={x => {
          console.log(x);
          setProgress(x);
        }}
        // Can be a URL or a local file.
        //  ref={(ref) => {
        //    this.player = ref
        //  }}                                      // Store reference
        //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //  onError={this.videoError}

        // Callback when video cannot be loaded
        muted
        //style={{width: '100%', height: fullScreen ? '100%' : 200}}
        style={{height: 250, width: screenWidth-20 , margin: 10 ,borderRadius: 20}}
        resizeMode="contain"
      />*/}

      {/*<Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={{
          height: 250,
          width: screenWidth - 20,
          margin: 10,
          borderRadius: 20,
        }}
      />*/}

      {/*/<VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
      />*/}
    </View>
  );
};

export default TrailorVideo;
