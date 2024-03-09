import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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

  useEffect(() => {
    setTimeout(() => {
      setStartVideo(true);
    }, 3000);
  }, []);

  const handleToggleMute = () => {
    setIsMute(prevMute => !prevMute);
  };

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

          <TouchableWithoutFeedback onPress={handleToggleMute}>
            {isMute ? (
              <Svg
                style={{position: 'absolute', bottom: 20, right: 20}}
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zm8.66-10.58a1 1 0 00-1.42 1.42 6 6 0 01-.38 8.84 1 1 0 00.64 1.76 1 1 0 00.64-.23 8 8 0 00.52-11.79zm-2.83 2.83a1 1 0 10-1.42 1.42A2 2 0 0116 12a2 2 0 01-.71 1.53 1 1 0 00-.13 1.41 1 1 0 001.41.12A4 4 0 0018 12a4.06 4.06 0 00-1.17-2.83z" />
                <Path
                  d="M21 18.63L3 5.37"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </Svg>
            ) : (
              <Svg
                style={{position: 'absolute', bottom: 20, right: 20}}
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <Path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zm8.66-10.58a1 1 0 00-1.42 1.42 6 6 0 01-.38 8.84 1 1 0 00.64 1.76 1 1 0 00.64-.23 8 8 0 00.52-11.79zm-2.83 2.83a1 1 0 10-1.42 1.42A2 2 0 0116 12a2 2 0 01-.71 1.53 1 1 0 00-.13 1.41 1 1 0 001.41.12A4 4 0 0018 12a4.06 4.06 0 00-1.17-2.83z" />
              </Svg>
            )}
          </TouchableWithoutFeedback>
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
    </View>
  );
};

export default TrailorVideo;
