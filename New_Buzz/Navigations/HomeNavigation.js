import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import HomeScreen from '../Screens/HomeScreen';
import NetInfo from '@react-native-community/netinfo';

const Stack = createNativeStackNavigator();

const HomeNavigation = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
