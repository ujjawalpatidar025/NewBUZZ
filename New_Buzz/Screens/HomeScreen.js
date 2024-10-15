import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  // const [token, settoken] = useState('alsldfnkjdasbfk');

  // const getToken = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('userToken');
  //     if (token !== null) {
  //       console.log('Retrieved token:', token);
  //       return token;
  //     }
  //   } catch (e) {
  //     // Handle error
  //     console.error('Failed to retrieve the token', e);
  //   }
  // };

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const tokenMain = await getToken();
  //     settoken(tokenMain);
  //   };
  //   fetchToken();
  // }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF4C4C" />

      <View style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 20,

            backgroundColor: '#FF4C4C',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
            Sanwariya New Born Garments
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{width: '60%', paddingLeft: 10}}>
              <Text style={{fontSize: 50, color: '#FF4C4C'}}>
                M<Text style={{color: 'gray', fontSize: 30}}>anage</Text>
              </Text>
              <Text style={{fontSize: 50, color: '#FF4C4C'}}>
                Y<Text style={{color: 'gray', fontSize: 30}}>our Work</Text>
              </Text>
            </View>
            <Image
              source={require('../Assets/sitting_home.png')} // Replace with your image URL
              style={styles.image}
            />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontSize: 20, color: '#FF4C4C', paddingBottom: 10}}>
              S<Text style={{color: 'gray', fontSize: 15}}>tatistics</Text>
            </Text>
            <View
              style={{
                margin: 0,
                backgroundColor: '#FF4C4C',
                height: 4,
                width: '10%',
                marginBottom: 10,
              }}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                backgroundColor: '#e8e2e2',
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#dad5d5', // Light gray color
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 16}}>Box 1</Text>
            </View>

            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                backgroundColor: '#e8e2e2',
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#dad5d5', // Light gray color
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 16}}>Box 2</Text>
            </View>

            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                backgroundColor: '#e8e2e2',
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#dad5d5', // Light gray color
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 16}}>Box 3</Text>
            </View>

            <View
              style={{
                width: 150,
                height: 150,
                margin: 10,
                backgroundColor: '#e8e2e2',
                borderRadius: 25,
                borderWidth: 1,
                borderColor: '#dad5d5', // Light gray color
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 16}}>Box 4</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
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

export default HomeScreen;
