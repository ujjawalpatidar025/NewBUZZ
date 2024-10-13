import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useToast} from 'react-native-toast-notifications';

const LoginScreen = () => {
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailEmptyPrompt, setIsEmailEmptyPrompt] = useState(false);
  const [isPasswordEmptyPrompt, setIsPasswordEmptyPrompt] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    if (!email) {
      toast.show('Email is Required', {
        type: 'danger',
      });
      return;
    }
    if (!password) {
      toast.show('Password is Required', {
        type: 'danger',
      });
      return;
    }
    try {
      const response = await axios.post(
        'http://192.168.1.4:5000/api/user/login',
        {email, password},
      );
      toast.show(response?.data?.message, {
        type: 'success',
      });
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message)
        toast.show(err?.response?.data?.message, {
          type: 'danger',
        });
      else
        toast.show(err?.error?.message, {
          type: 'danger',
        });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF4C4C" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.container}>
          {/* Login Title */}
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subTitle}>Welcome back to the app</Text>

          {/* Email Input */}
          <View style={{marginBottom: 15}}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={[styles.input, isEmailFocused && {borderColor: '#FF4C4C'}]}
              placeholder="Enter your email"
              placeholderTextColor="#888"
              value={email}
              onFocus={() => {
                setIsEmailFocused(true);
                setIsEmailEmptyPrompt(true);
              }}
              onBlur={() => {
                setIsEmailFocused(false);
                setIsEmailEmptyPrompt(true);
              }}
              cursorColor={'#FF4C4C'}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            {!email && isEmailEmptyPrompt && (
              <Text style={{color: 'red', marginTop: 5, fontSize: 12}}>
                *Email is Required
              </Text>
            )}
          </View>

          {/* Password Input */}
          <Text style={styles.label}>Password</Text>
          <View
            style={[
              styles.passwordContainer,
              isPasswordFocused && {borderColor: '#FF4C4C'},
            ]}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor="#888"
              secureTextEntry={!showPassword}
              value={password}
              onFocus={() => {
                setIsPasswordFocused(true);
                setIsPasswordEmptyPrompt(false);
              }}
              onBlur={() => {
                setIsPasswordFocused(false);
                setIsPasswordEmptyPrompt(true);
              }}
              cursorColor={'#FF4C4C'}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.showButton}
              onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.showButtonText}>
                {showPassword ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>
          {!password && isPasswordEmptyPrompt && (
            <View>
              <Text style={{color: 'red', marginTop: 5, fontSize: 12}}>
                *Password is Required
              </Text>
            </View>
          )}

          {/* Keep Me Signed In Checkbox */}
          {/* You can re-enable the checkbox here using the proper import */}

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.container_line}>
            <View style={styles.line} />
            <Text style={styles.text}>or Sign in Admin</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: 'gray',
                textAlign: 'center',
                backgroundColor: '#d3d3d3',
                paddingVertical: 10,
                borderRadius: 10,
              }}>
              Admin Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', // Ensures content starts from the top
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 70,
    color: '#FF4C4C',
    textAlign: 'left',
    fontFamily: 'Roboto',
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
    textAlign: 'left',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    padding: 10,

    fontSize: 15,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    paddingRight: 10, // Add padding to make space for the Show/Hide button
  },
  passwordInput: {
    flex: 1, // Allows the input to take the remaining width
    padding: 10,
    fontSize: 15,
    color: '#000',
  },
  showButton: {
    padding: 10,
  },
  showButtonText: {
    color: '#FF4C4C',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FF4C4C',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container_line: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, // Adjusts spacing above and below the divider
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d3d3d3', // Light gray color
  },
  text: {
    marginHorizontal: 10, // Space between the text and lines
    fontSize: 14,
    color: '#888', // Gray color for the text
  },
});

export default LoginScreen;
