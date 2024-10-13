import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Screens/Commons/SplashScreen';
import NoInternetScreen from './Screens/Commons/NetOffScreen';
import LoginScreen from './Screens/Auth/Login';
import NetInfo from '@react-native-community/netinfo';
import {ToastProvider, useToast} from 'react-native-toast-notifications';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const toast = useToast(); // Initialize toast without arguments

  const retryConnection = async navigation => {
    const state = await NetInfo.fetch();

    if (state.isConnected) {
      navigation.replace('Login');
      if (toast && typeof toast.show === 'function') {
        toast.show('Connected now', {
          type: 'success',
          placement: 'top',
          duration: 2000,
        });
      }
    } else {
      // Safely check if toast is available before using it
      if (toast && typeof toast.show === 'function') {
        toast.show('No internet connection', {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
        });
      } else {
        console.error('Toast is not initialized yet');
      }
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="NoInternet">
        {props => (
          <NoInternetScreen
            {...props}
            retryConnection={() => retryConnection(props.navigation)}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ToastProvider
      renderToast={toastOptions => (
        <View
          style={{
            borderWidth: 0.8,
            borderRadius: 10,
            borderColor: '#FF4C4C',
            backgroundColor: 'white',
            width: '90%',
            height: 30,
            margin: 5,
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FF4C4C', fontSize: 12}}>
            No Internet Connection
          </Text>
        </View>
      )}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
