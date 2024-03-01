import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import TrailorVideo from '../components/TrailorVideo';
import SeasonsEpisodeDescription from '../components/SeasonsEpisodeDescription';
import VideoDescription from '../components/VideoDescription';
import VideoContent from '../components/VideoContent';

export default function VideoStream() {
  return (
    <View style={{backgroundColor: '#0f1014', flex: 1}}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/*<TrailorVideo />*/}
          <VideoContent />
          <VideoDescription />
          <Text style={{padding: 10 , paddingVertical: 0 ,fontSize: 18 ,fontWeight: '500' ,color: 'white'}}>Episodes</Text>
          <SeasonsEpisodeDescription />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}