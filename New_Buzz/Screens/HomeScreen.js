import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [token, settoken] = useState('');

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token !== null) {
        console.log('Retrieved token:', token);
        return token;
      }
    } catch (e) {
      // Handle error
      console.error('Failed to retrieve the token', e);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      const tokenMain = await getToken();
      settoken(tokenMain);
    };
    fetchToken();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#FF4C4C" />

      <View>
        <Text style={{color: 'black'}}>{token}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
