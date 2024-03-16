import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TrailorVideo from '../components/TrailorVideo';
import SeasonsEpisodeDescription from '../components/SeasonsEpisodeDescription';
import VideoDescription from '../components/VideoDescription';
import VideoContent from '../components/VideoContent';

export default function VideoStream({navigation}) {
  const [fullScreen, setFullScreen] = useState(false);
  //const {podcastId} = route.params;

  const maxMinScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <View style={{backgroundColor: '#0f1014', flex: 1}}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/*<TrailorVideo />*/}
          <VideoContent maxMinScreen={maxMinScreen} fullScreen={fullScreen} />
          {fullScreen ? null : (
            <>
              <VideoDescription />
              <Text
                style={{
                  padding: 10,
                  paddingVertical: 0,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                }}>
                Episodes
              </Text>
              <SeasonsEpisodeDescription navigation={navigation} />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
