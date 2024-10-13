// screens/NoInternetScreen.js
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const NoInternetScreen = ({retryConnection}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF4C4C" />
      <View style={styles.imageContainer}>
        {/* Replace with your Wi-Fi off image */}
        <Image
          source={require('../../Assets/offline.png')} // Ensure this path is correct
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      {/* <Text style={styles.title}>No Internet Connection</Text> */}
      <Text style={styles.message}>
        No Internet Connection found. Check your connection or try again. try
        again.
      </Text>
      <TouchableOpacity onPress={retryConnection} style={styles.retryBtn}>
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 'auto',
            color: 'white',
            fontWeight: 'bold',
          }}>
          Retry
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // padding: 20,
  },
  retryBtn: {
    backgroundColor: '#FF4C4C',
    width: '50%',
    height: 40,
    borderRadius: 10,
  },
  imageContainer: {
    marginBottom: 0,

    paddingBottom: 15,
    margin: 0,
  },
  image: {
    width: 300, // Adjust the size as needed
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4C4C',
    marginBottom: 10,
  },
  message: {
    // fontSize: 16,
    width: '80%',
    textAlign: 'center',

    color: 'gray',
    marginBottom: 20,
  },
});

export default NoInternetScreen;
