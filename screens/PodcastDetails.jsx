import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import TrailorVideo from '../components/TrailorVideo';
import PodcastDescription from '../components/PodcastDescription';
import SeasonsEpisodeDescription from '../components/SeasonsEpisodeDescription';

export default function PodcastDetails() {
  return (
    <View style={{backgroundColor: '#0f1014', flex: 1}}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TrailorVideo />
          <PodcastDescription />
          <SeasonsEpisodeDescription />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
