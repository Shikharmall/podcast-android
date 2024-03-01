import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import Carousel from '../components/Carousel';
import PodcastCategories from '../components/PodcastCategories';

export default function Home() {
  const podcastsData = [
    {
      id: 1,
      title: 'Recent Podcasts',
      data: [
        {id: 1, name: 'abc1', image: require('../image/logo1.png')},
        {id: 2, name: 'abc2', image: require('../image/logo2.png')},
        {id: 3, name: 'abc3', image: require('../image/logo3.png')},
        {id: 4, name: 'abc4', image: require('../image/logo4.png')},
        {id: 5, name: 'abc5', image: require('../image/logo5.png')},
        {id: 6, name: 'abc6', image: require('../image/logo6.png')},
      ],
    },
    {
      id: 2,
      title: 'Famous Podcasts',
      data: [
        {id: 1, name: 'abc5', image: require('../image/logo5.png')},
        {id: 2, name: 'abc6', image: require('../image/logo6.png')},
        {id: 3, name: 'abc3', image: require('../image/logo3.png')},
        {id: 4, name: 'abc1', image: require('../image/logo1.png')},
        {id: 5, name: 'abc4', image: require('../image/logo4.png')},
        {id: 6, name: 'abc2', image: require('../image/logo2.png')},
      ],
    },
    {
      id: 3,
      title: 'Old Podcasts',
      data: [
        {id: 1, name: 'abc4', image: require('../image/logo4.png')},
        {id: 2, name: 'abc2', image: require('../image/logo2.png')},
        {id: 3, name: 'abc6', image: require('../image/logo6.png')},
        {id: 4, name: 'abc1', image: require('../image/logo1.png')},
        {id: 5, name: 'abc3', image: require('../image/logo3.png')},
        {id: 6, name: 'abc5', image: require('../image/logo5.png')},
      ],
    },
  ];
  return (
    <>
    <StatusBar
        backgroundColor="#0f1014" // Set your desired color here
        //barStyle="light-content" // Set the text color of the status bar
      />
    <View style={{backgroundColor: '#0f1014', flex: 1}}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Carousel />
          {podcastsData &&
            podcastsData.map((item, index) => (
              <PodcastCategories title={'Recent Podcasts'} key={index} item={item}/>
            ))}
        </ScrollView>
      </SafeAreaView>
    </View>
    </>
  );
}
