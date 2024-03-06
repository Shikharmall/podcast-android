import React from 'react';
import {
  View,
  Text,
  SectionList,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function PodcastCategories({title, item}) {
  /*const renderItemFunc1 = ({item}) => {
    return null;
  };*/

  const openPodcast = () =>{
    
  }

  const renderItemFunc = ({item}) => {
    return (
      <TouchableOpacity
       activeOpacity={1}
       onPress={openPodcast}
      >
        <Image
          source={item.image}
          style={{
            width: 130,
            height: 160,
            margin: 5,
            resizeMode: 'cover',
            borderRadius: 5,
            backgroundColor: 'blue',
          }}
        />
      </TouchableOpacity>
    );
  };

  /*const renderHeaderFunc = ({section}) => {
    return (
      <View>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 16,
            margin: 5,
            fontWeight: 'bold',
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
  };*/

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
      {/*<SectionList
        keyExtractor={item => item.id.toString()}
        sections={podcastsData}
        renderItem={({item}) => null}
        renderSectionHeader={renderHeaderFunc}
        //renderSection={renderSection}
      />*/}
      <Text
        style={{
          color: '#ffffff',
          fontSize: 16,
          margin: 5,
          fontWeight: 'bold',
        }}>
        {item.title}
      </Text>
      <FlatList
        data={item.data}
        horizontal={true}
        renderItem={renderItemFunc}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
