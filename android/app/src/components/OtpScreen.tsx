import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Header from './Header';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isResendDisabled, setResendDisabled] = useState(false);

  const handleVerifyOtp = () => {
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP.');
    } else {
      setError('');
      // Simulate OTP verification
      Alert.alert('OTP Verified', 'You have successfully logged in.');
      navigation.navigate('Home'); // Navigate to the next screen after verification
    }
  };

  const handleResendOtp = () => {
    setResendDisabled(true);
    setTimeout(() => setResendDisabled(false), 30000); // Disable resend for 30 seconds
    Alert.alert('OTP Sent', 'A new OTP has been sent to your mobile number.');
    // Call your resend OTP API here
  };

  return (
    <View style={styles.container}>
         <Header 
        title="Otp Screen" 
        onBackPress={() => navigation.goBack()} 
        rightButton="settings-outline" 
        rightButtonPress={() => console.log('Settings pressed')} 
      />
      <Text style={styles.content}>Welcome to the otp Screen!</Text>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>We have sent an OTP to your registered mobile number.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter 6-digit OTP"
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.resendButton, isResendDisabled && styles.resendButtonDisabled]}
        onPress={handleResendOtp}
        disabled={isResendDisabled}
      >
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  content: {
    margin: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendButton: {
    marginTop: 20,
  },
  resendButtonDisabled: {
    opacity: 0.5,
  },
  resendText: {
    color: '#6200EE',
    fontSize: 16,
  },
});

export default OtpScreen;
