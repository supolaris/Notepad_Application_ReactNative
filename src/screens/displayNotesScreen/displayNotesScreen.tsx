import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FastImage from 'react-native-fast-image';

const DisplayNotesScreen = () => {
  return (
    <View>
      <Text>D</Text>
      <FastImage
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
          priority: FastImage.priority.normal, // Set the priority as per your requirement
        }}
        resizeMode={FastImage.resizeMode.cover} // Adjust the resizeMode as needed
      />
      <View><Text>hsdkfj</Text></View>
    </View>
  )
}

export default DisplayNotesScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
    //backgroundColor: 'red',
      width: 200,
      height: 200,
    },
  });