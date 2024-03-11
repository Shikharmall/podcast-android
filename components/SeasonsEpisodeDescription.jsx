import {View, Text, Image} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import Episode from './Episode';

const SeasonsEpisodeDescription = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgba(128, 128, 128, 0.5)',
        }}>
        <View style={{padding: 10}}>
          <Text style={{color: 'gray', fontSize: 14, fontWeight: 'bold'}}>
            Season 1
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{color: 'gray', fontSize: 14, fontWeight: 'bold'}}>
            Season 2
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'white',
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            Season 3
          </Text>
        </View>
      </View>
      <View>
        <Episode navigation={navigation} />
        <Episode navigation={navigation} />
        <Episode navigation={navigation} />
        <Episode navigation={navigation} />
        <Episode navigation={navigation} />
        <Episode navigation={navigation} />
      </View>
    </View>
  );
};

export default SeasonsEpisodeDescription;
