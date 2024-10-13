// Toaster.js
import React from 'react';
import {View, Text} from 'react-native';

const Toaster = ({message, type}) => {
  // You can customize the background color or border color based on the 'type' if needed.
  const borderColor = type === 'danger' ? '#FF4C4C' : '#4ea05d'; // Example: red for danger, green for success
  const textColor = type === 'danger' ? '#FF4C4C' : '#4ea05d';

  return (
    <View
      style={{
        borderWidth: 0.8,
        borderRadius: 10,
        borderColor: borderColor,
        backgroundColor: borderColor,
        width: '90%',
        height: 30,
        margin: 5,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 12}}>{message}</Text>
    </View>
  );
};

export default Toaster;
