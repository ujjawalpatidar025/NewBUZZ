import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import HistoryRow from './HistoryRow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

const HomeScreen = () => {
  // const [token, settoken] = useState('alsldfnkjdasbfk');
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      setModalVisible(false);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to clear AsyncStorage:', error);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF4C4C" />
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              paddingHorizontal: 20,
              paddingVertical: 30,
              backgroundColor: 'white',
              borderRadius: 25,
            }}>
            <Text
              style={{
                paddingBottom: 20,
                color: 'gray',
                textAlign: 'center',
                fontSize: 15,
              }}>
              Are you sure to logout ???
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,

                  borderRadius: 15,
                  backgroundColor: '#FF4C4C',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                  Logout
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,

                  borderRadius: 15,
                  backgroundColor: 'gray',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FF4C4C',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
            Sanwariya New Born Garments
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="logout" size={30} color={'white'} />
          </TouchableOpacity>
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
              source={require('../../Assets/sitting_home.png')} // Replace with your image URL
              style={styles.image}
            />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontSize: 20, color: '#FF4C4C', paddingBottom: 0}}>
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
              <Text style={{color: '#FF4C4C', fontSize: 50}}>
                4<Text style={{color: 'gray', fontSize: 40}}>8</Text>
              </Text>
              <Text style={{color: 'gray', textAlign: 'center'}}>Orders</Text>
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
              <Text style={{color: '#FF4C4C', fontSize: 50}}>
                4<Text style={{color: 'gray', fontSize: 40}}>8</Text>
              </Text>
              <Text style={{color: 'gray', textAlign: 'center'}}>
                Working Days
              </Text>
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
              <Text style={{color: '#FF4C4C', fontSize: 50}}>
                4<Text style={{color: 'gray', fontSize: 40}}>8</Text>
              </Text>
              <Text style={{color: 'gray', textAlign: 'center'}}>
                Amount [month]
              </Text>
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
              <Text style={{color: '#FF4C4C', fontSize: 50}}>
                4<Text style={{color: 'gray', fontSize: 40}}>8</Text>
              </Text>
              <Text style={{color: 'gray', textAlign: 'center'}}>
                Purchase amount
              </Text>
            </View>
          </View>

          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            <Text style={{fontSize: 20, color: '#FF4C4C', paddingBottom: 0}}>
              H<Text style={{color: 'gray', fontSize: 15}}>istory</Text>
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
          <View style={{padding: 20}}>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#dad5d5', //
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
              }}>
              {[1, 2, 3, 4, 5, 4, 5, 5, 4, 4, 4, 4, 4, 4].map((item, index) => (
                <HistoryRow key={index} index={index} />
              ))}
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
