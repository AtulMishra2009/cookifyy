// import { Header } from '@react-navigation/stack';
import Header from '../components/Header'
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import TextField from './CommonTextField';
import { useNavigation } from '@react-navigation/native';
// import Header from './components/Header';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    console.log('setmobilenumbererror',mobileNumber)
    const [error, setError] = useState('');
    // props?.route?.param?.onBackpress;
    const handleRequestOTP = () => {
        if (mobileNumber.length !== 10 || !/^\d{10}$/.test(mobileNumber)) {
          setError('Please enter a valid 10-digit mobile number.');
        } else {
          setError('');
          // Trigger OTP API call or navigation here
          Alert.alert('OTP Sent', `OTP has been sent to ${mobileNumber}`);
        }
        navigation.navigate('OtpScreen')
      };
    
  return (
    <View style={styles.container}>
      <Header 
        title="Login" 
        onBackPress={() => navigation.goBack()} 
        rightButton="settings-outline" 
        rightButtonPress={() => console.log('Settings pressed')} 
      />
      <Text style={styles.content}>Welcome to the Login Screen!</Text>
      <TextField
        label="Mobile Number"
        placeholder="Enter your mobile number"
        keyboardType="phone-pad"
        maxLength={10}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        errorMessage={error}
      />
      <TouchableOpacity style={styles.button} onPress={handleRequestOTP}>
        <Text style={styles.buttonText}>Request OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    margin: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
