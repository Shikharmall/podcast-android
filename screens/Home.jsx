import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Carousel from '../components/Carousel';
import PodcastsList from '../components/PodcastsListOld';
import PodcastCategories from '../components/PodcastCategories';

export default function Home() {
  return (
    <View style={{backgroundColor: '#0f1014', flex: 1}}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Carousel />
          <PodcastCategories />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
