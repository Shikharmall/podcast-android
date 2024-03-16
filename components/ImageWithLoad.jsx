import {Image, Dimensions, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function ImageWithLoad({url}) {
  const screenWidth = Dimensions.get('window').width;
  const [loading, setLoading] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleLoadStart = () => {
    setLoading(true);
    //setError(false);
  };

  const handleLoad = () => {
    setLoading(false);
    //setError(false);
  };

  return (
    <View
      style={{
        position: 'relative',
        width: isPressed ? 130 : 128,
        height: isPressed ? 160 : 158,
        margin: 5,
      }}>
      {loading && (
        <ShimmerPlaceholder
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: isPressed ? 130 : 128,
            height: isPressed ? 160 : 158,
            //margin: 5,
            zIndex: 1, // Ensure the shimmer appears above the image
          }}
          //shimmerColors={['gray']}
        />
      )}

      <Image
        source={url}
        style={{
          //width: 130,
          //height: 160,
          width: isPressed ? 130 : 128,
          height: isPressed ? 160 : 158,
          margin: 5,
          resizeMode: 'cover',
          borderRadius: 5,
          backgroundColor: 'gray',
        }}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
      />
    </View>
  );
}
