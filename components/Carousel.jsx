import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

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
      <Image source={item.image} style={{height: 300, width: screenWidth}} />
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
            style={{height: 50, width: 50, borderRadius: 5}}
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
          }}>
          <View>
            <Image
              source={require('../image/thesaruslogo.jpg')}
              style={{height: 50, width: 50, borderRadius: 5}}
            />
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
