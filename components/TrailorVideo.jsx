import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Path, Svg} from 'react-native-svg';
const screenWidth = Dimensions.get('window').width;
import Video from 'react-native-video';

const TrailorVideo = ({navigation}) => {
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
  const [startVideo, setStartVideo] = useState(false);
  const [isMute, setIsMute] = useState(true);

  console.log(isMute);

  useEffect(() => {
    setTimeout(() => {
      setStartVideo(true);
    }, 3000);
  }, []);

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={{position: 'relative'}}>
      {startVideo ? (
        <>
          <Video
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            resizeMode="cover" // You can change this to 'cover' or 'stretch'
            style={{
              height: 250,
              width: screenWidth - 20,
              margin: 10,
              borderRadius: 20,
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
            //controls={true} // You can add controls if needed
            muted={isMute}
          />
          {isMute ? (
            <TouchableOpacity
              //activeOpacity={1}
              onPress={() => {
                setIsMute(!isMute); // Toggle the mute state
              }}
              width="20px"
              height="20px">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                }}
                width="20px"
                height="20px"
                fill={'white'}
                viewBox="0 0 24 24">
                <Path d="M21.29 1.29l-3.43 3.44a2.52 2.52 0 00-3.8-1.3L8.7 7H5a1 1 0 00-1 1v8a1 1 0 001 1h.59l-4.3 4.29a1 1 0 001.42 1.42C9.05 16.36 8.29 17 8.7 17c5.7 3.8 5.73 4 6.76 4A2.54 2.54 0 0018 18.46v-11l4.71-4.7a1 1 0 00-1.42-1.47zm-6.12 3.8a.55.55 0 01.83.45v1l-6 6v-4zM6 15V9h2c0 6.81.53 6-2 6zm10 3.46a.55.55 0 01-.83.45L10 15.46c0-.1-.46.42 6-6.05z" />
              </Svg>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              //activeOpacity={1}
              onPress={() => {
                setIsMute(!isMute); // Toggle the mute state
              }}>
              <Svg
                style={{position: 'absolute', bottom: 20, right: 20}}
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zm8.66-10.58a1 1 0 00-1.42 1.42 6 6 0 01-.38 8.84 1 1 0 00.64 1.76 1 1 0 00.64-.23 8 8 0 00.52-11.79zm-2.83 2.83a1 1 0 10-1.42 1.42A2 2 0 0116 12a2 2 0 01-.71 1.53 1 1 0 00-.13 1.41 1 1 0 001.41.12A4 4 0 0018 12a4.06 4.06 0 00-1.17-2.83z" />
              </Svg>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <Image
          source={require('../image/mainLogo1.png')}
          style={{
            height: 250,
            width: screenWidth - 20,
            margin: 10,
            borderRadius: 20,
          }}
        />
      )}
      <TouchableOpacity
        activeOpacity={1}
        style={{position: 'absolute', top: 20, right: 20}}
        onPress={() => {
          handleGoBack();
        }}>
        <Svg
          width="20px"
          height="20px"
          viewBox="-3.5 0 19 19"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="cf-icon-svg">
          <Path d="M11.383 13.644A1.03 1.03 0 019.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 11-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 111.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 011.455 1.456L7.455 9.716z" />
        </Svg>
      </TouchableOpacity>

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
