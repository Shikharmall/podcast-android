import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {Path, Svg} from 'react-native-svg';

export class PodcastDescription extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: 120, height: 70}}>
            <Image
              source={require('../image/title.png')}
              style={{
                //height: 200,
                //width: 200,
                width: '100%',
                height: '100%',
                resizeMode: 'contain', // Add this line to handle the image size
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              //color: '#e2e6f1',
              color: 'gray',
              fontSize: 14,
              fontWeight: 'bold',
              margin: 10,
            }}>
            2024 &#x2022; 1 Seasons &#x2022; 3 languages &#x2022;{' '}
            <Text
              style={
                {
                  //backgroundColor: 'rgba(128, 128, 128, 0.5)',
                  //paddingHorizontal: 15,
                  //color: 'white',
                  //borderRadius: 20
                }
              }>
              U/A 18+
            </Text>
          </Text>
        </View>

        {/* watch button */}

        <TouchableOpacity
        //style={{position: 'absolute', bottom: 20, right: 20}}
        //onPress={handleButtonClick}
        >
          <View
            style={{
              padding: 10,
              //backgroundColor: 'white',
              backgroundColor: '#dedcdc',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 70,
              paddingVertical: 15,
              marginHorizontal: 10,
            }}>
            <Svg
              fill={'black'}
              width="25px"
              height="25px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <Path d="M5.008 12.897a.644.644 0 01-.91-.227.719.719 0 01-.098-.364V3.693C4 3.31 4.296 3 4.662 3a.64.64 0 01.346.103l6.677 4.306a.713.713 0 010 1.182l-6.677 4.306z" />
            </Svg>
            <Text style={{color: '#121212', fontWeight: '500', fontSize: 16}}>
              Watch Latest Season
            </Text>
          </View>
        </TouchableOpacity>

        {/* genres */}

        <View style={{alignItems: 'center'}}>
          <ScrollView
            horizontal
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Text
              style={{
                //color: '#e2e6f1',
                color: 'gray',
                fontSize: 12,
                fontWeight: 'bold',
                margin: 10,
              }}>
              <Text style={{color: 'white'}}>Drama</Text> |{' '}
              <Text style={{color: 'white'}}>Comedy</Text> |{' '}
              <Text style={{color: 'white'}}>Thriller</Text> |{' '}
              <Text style={{color: 'white'}}>Crime</Text> |{' '}
              <Text style={{color: 'white'}}>Violence</Text>
            </Text>
          </ScrollView>
        </View>

        {/* description */}

        <View>
          <Text
            style={{
              //color: '#e2e6f1',
              color: 'gray',
              fontSize: 13,
              fontWeight: '500',
              margin: 10,
              marginVertical: 0,
            }}>
            PART 2 - ANTIM VAAR OUT. The Sherni is back again, and she is all
            set to end it all. Will she succeded?
          </Text>
        </View>

        {/* features */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              margin: 20,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
                fill="#ffffff"
              />
            </Svg>
            <Text style={{color: 'gray'}}>Watchlist</Text>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Svg
              fill="#ffffff"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg">
              <Path d="M21.707 11.293l-8-8A1 1 0 0012 4v3.545A11.015 11.015 0 002 18.5V20a1 1 0 001.784.62 11.456 11.456 0 017.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 001.707.707l8-8a1 1 0 000-1.414zM14 17.586V15.5a1 1 0 00-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 00-7.386 2.948A9.013 9.013 0 0113 9.5a1 1 0 001-1V6.414L19.586 12z" />
            </Svg>
            <Text style={{color: 'gray'}}>Share</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PodcastDescription;
