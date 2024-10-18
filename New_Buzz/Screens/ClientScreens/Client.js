import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Client = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 20,

          backgroundColor: '#FF4C4C',
        }}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
          Client Space
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 40,
    // Align items in the center vertically
  },
  image: {
    width: 120,
    height: 150,
    marginRight: 10, // Add spacing between image and text
  },
  text: {
    flex: 1, // Allow text to take up the remaining space
    fontSize: 16,
  },
});

export default Client;
