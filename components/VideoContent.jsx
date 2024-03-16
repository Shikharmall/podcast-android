import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import Video from 'react-native-video';
import Svg, {Path} from 'react-native-svg';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';

export default function VideoContent({maxMinScreen, fullScreen}) {
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(null);
  //const [fullScreen, setFullScreen] = useState(false);
  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
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
      <TouchableOpacity onPress={() => setClicked(true)} activeOpacity={1}>
        <Video
          //source={{
          //  //uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          //  uri: require('C:/Users/Lenovo/Downloads/BigBuckBunny.mp4'),
          //}}
          source={require('../image/BigBuckBunny.mp4')}

          //../image/BigBuckBunny.mp4
          style={{
            //height: fullScreen ? screenWidth : 250,
            //width: screenWidth - 20,
            //margin: 10,
            //borderRadius: 20,
            //width: screenWidth,
            //width: fullScreen ? screenHeight : screenWidth,
            width: '100%',
            height: fullScreen ? 380 : 250,
          }}
          //resizeMode="contain"
          ref={ref}
          onProgress={x => {
            //console.log(x);
            setProgress(x);
          }}
          //rate={1.0}
          //volume={1.0}
          //muted={false}
          paused={paused}
          //resizeMode="contain"
          //repeat={false}
          //fullscreen={false}
          //onLoad={(data) => console.log('Video is loaded')}
          //onError={(error) => console.log('Error occurred: ', error)}
          //onProgress={(data) => console.log('Video progress: ', data)}
          //controls={true} // You can add controls if needed
        />
        {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setClicked(false)}
            activeOpacity={1}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => {}}>
                <Svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white">
                  <Path
                    transform="rotate(180 128 128)"
                    d="M128 24a104 104 0 10104 104A104.12 104.12 0 00128 24zm36 136a8 8 0 01-16 0v-22.386l-43.563 29.042A7.996 7.996 0 0192 160V96a7.996 7.996 0 0112.438-6.656L148 118.386V96a8 8 0 0116 0z"
                  />
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPaused(!paused)}
                style={{marginHorizontal: 50}}>
                <Svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  fill="white"
                  viewBox="0 0 24 24">
                  {paused ? (
                    <Path
                      fillRule="evenodd"
                      d="M8.6 5.2A1 1 0 007 6v12a1 1 0 001.6.8l8-6a1 1 0 000-1.6l-8-6z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <Path
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm9-3a1 1 0 10-2 0v6a1 1 0 102 0V9zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V9z"
                      clipRule="evenodd"
                    />
                  )}
                </Svg>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white">
                  <Path d="M128 24a104 104 0 10104 104A104.12 104.12 0 00128 24zm36 136a8 8 0 01-16 0v-22.386l-43.563 29.042A7.996 7.996 0 0192 160V96a7.996 7.996 0 0112.438-6.656L148 118.386V96a8 8 0 0116 0z" />
                </Svg>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                style={{width: '80%', height: 40}}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#fff"
                onValueChange={x => {
                  ref.current.seek(x);
                }}
              />
              <Text style={{color: 'white'}}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                top: 10,
                //right: 10,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (fullScreen) {
                    Orientation.lockToPortrait();
                  } else {
                    Orientation.lockToLandscape();
                  }
                  //setFullScreen(!fullScreen);
                  maxMinScreen();
                }}>
                {/*<Image
                  source={
                    fullScreen
                      ? require('./src/minimize.png')
                      : require('./src/full-size.png')
                  }
                  style={{width: 24, height: 24, tintColor: 'white'}}
                />*/}
                {fullScreen ? (
                  <Svg
                    fill="#fff"
                    width="35px"
                    height="35px"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.854 1.854L10.707 5H13v1H9V2h1v2.293l3.146-3.147.708.708zM4.293 5L1.146 1.854l.708-.708L5 4.293V2h1v4H2V5h2.293zM2 9h4v4H5v-2.293l-3.146 3.147-.708-.707L4.293 10H2V9zm7 0h4v1h-2.293l3.147 3.146-.708.708L10 10.707V13H9V9z"
                      fill="#fff"
                    />
                  </Svg>
                ) : (
                  <Svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 100 100"
                    xmlSpace="preserve">
                    <Path
                      d="M22.661 20.5H36a2 2 0 000-4H19c-1.104 0-2.5 1.276-2.5 2.381v17a2 2 0 004 0V24.876l16.042 15.791c.391.391 1.027.586 1.539.586s1.086-.195 1.477-.586c.781-.781.812-2.237.031-3.019L22.661 20.5zM83 16.5H66a2 2 0 000 4h12.605L61.647 37.648c-.781.781-.781 2.142 0 2.923.39.391.902.633 1.414.633s.774-.171 1.164-.562l16.274-16.5V35.88a2 2 0 004 0v-17c.001-1.104-.395-2.38-1.499-2.38zM36.542 60.962L20.5 76.754V65.881a2 2 0 00-4 0v17c0 1.104 1.396 1.619 2.5 1.619h17a2 2 0 000-4H22.529L39.62 63.6c.781-.781.656-1.951-.125-2.732-.78-.782-2.173-.687-2.953.094zM82.5 63.881a2 2 0 00-2 2v11.606L64.226 60.962c-.78-.781-1.923-.781-2.703 0-.781.781-.719 1.856.062 2.638l17.152 16.9H66a2 2 0 000 4h17c1.104 0 1.5-.515 1.5-1.619v-17a2 2 0 00-2-2z"
                      fill="#fff"
                    />
                  </Svg>
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}
