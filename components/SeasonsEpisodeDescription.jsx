import {View, Text, Image} from 'react-native';
import React from 'react';

const SeasonsEpisodeDescription = () => {
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
          <Text style={{color: 'gray', fontSize: 20, fontWeight: 'semibold'}}>
            Season 1
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{color: 'gray', fontSize: 20, fontWeight: 'semibold'}}>
            Season 2
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'white',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'semibold'}}>
            Season 3
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{margin: 10, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image
              source={require('../image/mainLogo1.png')}
              style={{
                height: 80,
                width: '100%',
                margin: 2,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{flex: 2}}>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                margin: 10,
                marginVertical: 0,
              }}>
              Episode 1: Kahaani abhi taak nahi hui hai
            </Text>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'gray',
                fontSize: 15,
                fontWeight: 'bold',
                margin: 10,
              }}>
              S1 E1 &#x2022; 3 Nov 2023 &#x2022; 43m
            </Text>
          </View>
        </View>
        <View
          style={{margin: 10, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image
              source={require('../image/mainLogo1.png')}
              style={{
                height: 80,
                width: '100%',
                margin: 2,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{flex: 2}}>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                margin: 10,
                marginVertical: 0,
              }}>
              Episode 1: Kahaani abhi taak nahi hui hai
            </Text>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'gray',
                fontSize: 15,
                fontWeight: 'bold',
                margin: 10,
              }}>
              S1 E1 &#x2022; 3 Nov 2023 &#x2022; 43m
            </Text>
          </View>
        </View>
        <View
          style={{margin: 10, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image
              source={require('../image/mainLogo1.png')}
              style={{
                height: 80,
                width: '100%',
                margin: 2,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{flex: 2}}>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                margin: 10,
                marginVertical: 0,
              }}>
              Episode 1: Kahaani abhi taak nahi hui hai
            </Text>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'gray',
                fontSize: 15,
                fontWeight: 'bold',
                margin: 10,
              }}>
              S1 E1 &#x2022; 3 Nov 2023 &#x2022; 43m
            </Text>
          </View>
        </View>
        <View
          style={{margin: 10, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image
              source={require('../image/mainLogo1.png')}
              style={{
                height: 80,
                width: '100%',
                margin: 2,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{flex: 2}}>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                margin: 10,
                marginVertical: 0,
              }}>
              Episode 1: Kahaani abhi taak nahi hui hai
            </Text>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'gray',
                fontSize: 15,
                fontWeight: 'bold',
                margin: 10,
              }}>
              S1 E1 &#x2022; 3 Nov 2023 &#x2022; 43m
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SeasonsEpisodeDescription;
