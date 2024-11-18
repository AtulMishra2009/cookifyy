import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextField = ({ label, placeholder, keyboardType, maxLength, onChangeText, value, errorMessage }) => {
  const [isFocused, setIsFocused] = useState(false);
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  inputFocused: {
    borderColor: '#6200EE',
  },
  error: {
    marginTop: 5,
    fontSize: 12,
    color: 'red',
  },
});

export default TextField;
