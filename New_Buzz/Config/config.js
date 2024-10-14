import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = `https://new-buzz-backend.vercel.app`;

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (token !== null) {
      return token;
    }
  } catch (e) {
    // Handle error
    console.error('Failed to retrieve the token', e);
  }
};

const storeToken = async (token, user) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    // Handle error
    console.error('Failed to store the Data', e);
  }
};

const setHeader = async () => {
  try {
    const token = await getToken();
    console.log(token, 'setheader');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    return config;
  } catch (err) {
    console.log(err);
  }
};

export {API_URL, setHeader, getToken, storeToken};
