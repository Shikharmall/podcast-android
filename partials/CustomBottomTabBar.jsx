import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import HomeIcon from '../icons/HomeIcon';
import SearchIcon from '../icons/SearchIcon';
import NewIcon from '../icons/NewIcon';
import DownloadIcon from '../icons/DownloadIcon';
import MySpaceIcon from '../icons/MySpaceIcon';

const CustomBottomTabBar = ({state, descriptors, navigation}) => {
  const renderIcon = (route, isFocused) => {
    const iconProps = {size: 30, color: isFocused ? '#e2e6f1' : '#868c99'};

    switch (route.name) {
      case 'Home':
        return <HomeIcon {...iconProps} />;
      case 'Search':
        return <SearchIcon {...iconProps} />;
      case 'New':
        return <NewIcon {...iconProps} />;
      case 'Download':
        return <DownloadIcon {...iconProps} />;
      case 'MySpace':
        return <MySpaceIcon {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <View
      style={{flexDirection: 'row', height: 60, backgroundColor: '#0f1014'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopWidth: 0.5,
              borderTopColor: 'rgba(134, 140, 153, 0.5)',
            }}>
            
            {renderIcon(route, isFocused)}
            <Text style={{color: isFocused ? '#e2e6f1' : '#868c99'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;

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
