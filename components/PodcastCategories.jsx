import React from 'react';
import {
  View,
  Text,
  SectionList,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

export default function PodcastCategories() {
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

  const renderItemFunc1 = ({item}) => {
    return null;
  };

  const renderItemFunc = ({item}) => {
    return (
      <Image
        source={item.image}
        style={{width: 130, height: 160, borderRadius: 5, margin: 5}}
      />
    );
  };

  const renderHeaderFunc = ({section}) => {
    return (
      <View>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            margin: 5,
          }}>
          {section.title}
        </Text>
        <FlatList
          data={section.data}
          horizontal={true}
          renderItem={renderItemFunc}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  /*const renderSection = ({section}) => (
    <ScrollView horizontal={true}>
      {section.data.map((item, index) => (
        <View key={index} style={{padding: 10}}>
          <Image
            source={item.image}
            style={{width: 130, height: 160, borderRadius: 5, margin: 10}}
          />
        </View>
      ))}
    </ScrollView>
  );*/

  return (
    <View style={{flex: 1}}>
      <SectionList
        keyExtractor={item => item.id.toString()}
        sections={podcastsData}
        renderItem={({item}) => null}
        renderSectionHeader={renderHeaderFunc}
        //renderSection={renderSection}
      />
    </View>
  );
}
