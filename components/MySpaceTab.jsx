import {View, Text} from 'react-native';
import React from 'react';
import Episode from './Episode';

const MySpaceTab = () => {
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          //flex: 1,
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: 'rgba(128, 128, 128, 0.5)',
        }}>
        <View style={{padding: 10}}>
          <Text style={{color: 'gray', fontSize: 14, fontWeight: 'bold'}}>
            Pocasts
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'white',
          }}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            Watchlist
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MySpaceTab;
