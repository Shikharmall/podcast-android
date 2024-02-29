import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Path, Svg} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

export default function Carousel() {
  const flatListRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const carouselData = [
    {
      id: 1,
      image: require('../image/mainLogo1.png'),
    },
    {
      id: 2,
      image: require('../image/mainLogo2.png'),
    },
    {
      id: 3,
      image: require('../image/mainLogo3.png'),
    },
    {
      id: 4,
      image: require('../image/mainLogo4.png'),
    },
  ];

  const renderItemFunc = ({item, index}) => {
    return (
      <View>
        <Image source={item.image} style={{height: 300, width: screenWidth}} />

        <LinearGradient
          //colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
          //colors={['rgba(15, 16, 20, 0)', 'rgba(15, 16, 20, 0.5)', 'rgba(15, 16, 20, 1)']}
          //colors={['rgba(15,16,20,1)', 'rgba(15,16,20,1)', 'rgba(15,16,20,1)']}
          colors={['rgba(0, 0, 0, 0.1)', '#0f1014', '#0f1014']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 100, // Adjust the height of the fading effect as needed
          }}
        />
      </View>
    );
  };

  const renderDotIndicators = () => {
    return carouselData.map((_, index) => {
      return (
        <View
          key={index}
          style={[
            {
              borderRadius: 5,
              margin: 4,
            },
            activeIndex === index
              ? {backgroundColor: '#e2e6f1', width: 10, height: 10}
              : {backgroundColor: 'gray', width: 8, height: 8},
          ]}
        />
      );
    });
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // const index = scrollPosition / screenWidth;
    const index = Math.round(scrollPosition / screenWidth); // round decimal to nearest number.
    setActiveIndex(index);
  };

  // console.log(activeIndex);
  //useEffect(()=>{
  //},[]);

  return (
    <>
      <View style={{position: 'relative'}}>
        <FlatList
          ref={flatListRef}
          data={carouselData}
          renderItem={renderItemFunc}
          keyExtractor={item => item.id}
          horizontal={true}
          pagingEnabled={true}
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 10,
          }}>
          <Image
            source={require('../image/thesaruslogo.jpg')}
            style={{height: 40, width: 40, borderRadius: 5}}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            //backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: 50,
              }}>
              <Image
                source={require('../image/title.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text
              style={{
                color: '#e2e6f1',
                fontSize: 16,
                fontWeight: 'bold',
                margin: 10,
              }}>
              2024 <Text style={{color: 'white'}}>&#x2022;</Text> Hindi{' '}
              <Text style={{color: 'white'}}>&#x2022;</Text> Drama{' '}
              <Text style={{color: 'white'}}>&#x2022;</Text> Action{' '}
              <Text style={{color: 'white'}}>&#x2022;</Text> Comedy
            </Text>
            <TouchableOpacity
            //style={{position: 'absolute', bottom: 20, right: 20}}
            //onPress={handleButtonClick}
            >
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 70,
                }}>
                <Svg
                  fill={'white'}
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path d="M5.008 12.897a.644.644 0 01-.91-.227.719.719 0 01-.098-.364V3.693C4 3.31 4.296 3 4.662 3a.64.64 0 01.346.103l6.677 4.306a.713.713 0 010 1.182l-6.677 4.306z" />
                </Svg>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  Watch Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        {renderDotIndicators()}
      </View>
    </>
  );
}
