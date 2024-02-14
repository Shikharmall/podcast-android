//import React from 'react'

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {

  const navigation = useNavigation();

  const handleViewProduct = () => {
    // Navigate to the specific product page, replace 'ProductDetails' with your screen name
    navigation.navigate('Search', { serachId: 'searchId' });
  };


  return (
    <>
      <View
        style={[
          styles.navbar,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={styles.item}>
          <Svg
            width="20px"
            height="20px"
            viewBox="0 0 15 15"
            fill="none"
            //xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M7.825.12a.5.5 0 00-.65 0L0 6.27v7.23A1.5 1.5 0 001.5 15h4a.5.5 0 00.5-.5v-3a1.5 1.5 0 013 0v3a.5.5 0 00.5.5h4a1.5 1.5 0 001.5-1.5V6.27L7.825.12z"
              fill="#e2e6f1"
            />
          </Svg>
          <Text style={styles.textActive}>Home</Text>
        </View>

        <TouchableOpacity onPress={handleViewProduct}>
          <View
            style={styles.item}
            onPress={() => navigation.navigate('Search')}>
            <Svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              //xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 117-7 7 7 0 01-7 7z"
                fill="#868c99"
              />
            </Svg>
            <Text style={styles.text}>Search</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.item}>
          <Svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            //xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M9.99 22.75c-.2 0-.36-.04-.48-.09-.4-.15-1.08-.64-1.08-2.19v-6.45H6.09c-1.34 0-1.82-.63-1.99-1-.17-.38-.32-1.15.56-2.16l7.57-8.6c1.02-1.16 1.85-1.08 2.25-.93.4.15 1.08.64 1.08 2.19v6.45h2.34c1.34 0 1.82.63 1.99 1 .17.38.32 1.15-.56 2.16l-7.57 8.6c-.71.81-1.33 1.02-1.77 1.02zm3.94-20.01c-.03.04-.24.14-.57.52l-7.57 8.6c-.28.32-.32.52-.32.56.02.01.2.11.62.11h3.09c.41 0 .75.34.75.75v7.2c0 .5.09.72.13.78.03-.04.24-.14.57-.52l7.57-8.6c.28-.32.32-.52.32-.56-.02-.01-.2-.11-.62-.11h-3.09c-.41 0-.75-.34-.75-.75v-7.2c.01-.5-.09-.71-.13-.78z"
              fill="#868c99"
            />
          </Svg>
          <Text style={styles.text}>New</Text>
        </View>

        <View style={styles.item}>
          <Svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            //xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M12 2a1 1 0 011 1v10.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 13.586V3a1 1 0 011-1zM5 17a1 1 0 011 1v2h12v-2a1 1 0 112 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a1 1 0 011-1z"
              fill="#868c99"
            />
          </Svg>
          <Text style={styles.text}>Download</Text>
        </View>

        <View style={styles.item}>
          <Svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            //xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fillRule="evenodd"
              d="M6.035 18.74A8.966 8.966 0 0012 21a8.966 8.966 0 005.965-2.26C17.672 17.687 15.569 17 12 17c-3.57 0-5.672.687-5.965 1.74zm-1.434-1.615C5.726 15.638 8.37 15 12 15c3.63 0 6.274.638 7.4 2.125a9 9 0 10-14.799 0zM12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zM8 10c0-2.244 1.58-4 4-4 2.414 0 4 1.922 4 4.2 0 3.28-1.782 4.8-4 4.8-2.24 0-4-1.573-4-5zm2 0c0 2.27.818 3 2 3 1.178 0 2-.702 2-2.8 0-1.25-.784-2.2-2-2.2-1.266 0-2 .816-2 2z"
              fill="#868c99"
            />
          </Svg>
          <Text style={styles.text}>My Space</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    marginTop: 5,
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#0f1014',
    borderTopWidth: 0.5, // top border width
    //borderTopColor: '#868c99',
    borderTopColor: 'rgba(134, 140, 153, 0.5)',
    //position: fixed,
    //bottom: 0
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  text: {
    color: '#868c99',
  },
  textActive: {
    color: '#e2e6f1',
  },
});
