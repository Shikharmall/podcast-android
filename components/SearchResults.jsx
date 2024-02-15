import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function SearchResults() {
  return (
    <>
      <View style={[
          styles.containerBox,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={styles.item}>
          <Text style={styles.textHeading}>One</Text>
        </View>
        <View style={styles.item}>
          <View>
            <Text style={styles.textHeading}>Two</Text>
          </View>
          <View>
            <Text style={styles.textHeading}>Three</Text>
          </View>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerBox: {
    flex: 1,
    width: 200,
    height: 200
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  textHeading: {
    color: '#ffffff',
    fontSize: 20,
    //margin: 5,
  },
});
