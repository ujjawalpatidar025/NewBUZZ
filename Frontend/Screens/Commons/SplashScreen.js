// screens/SplashScreen.js
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ToastContainer, {useToast} from 'react-native-toast-notifications';

const SplashScreen = ({navigation}) => {
  const toast = useToast();
  useEffect(() => {
    const checkInternetConnection = async () => {
      const state = await NetInfo.fetch();
      if (state.isConnected) {
        setTimeout(() => {
          navigation.replace('Login');
        }, 2000); // Simulate loading time
      } else {
        setTimeout(() => {
          navigation.replace('NoInternet');
        }, 2000);
      }
    };

    checkInternetConnection();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF4C4C" />
      <View style={styles.imageContainer}>
        {/* Replace with your Wi-Fi off image */}
        <Image
          source={require('../../Assets/sittingSplash.png')} // Ensure this path is correct
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={{color: 'gray', textAlign: 'center', width: '70%'}}>
        Exploring the world of Business and Management Officials
      </Text>
      <Text style={styles.message}>Hang On, we are on the way....</Text>
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
    borderRadius: 50,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4C4C',
    margin: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    color: 'gray',
    marginBottom: 20,
  },
});

export default SplashScreen;
