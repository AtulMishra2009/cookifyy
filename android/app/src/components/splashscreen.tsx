// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;
const SplashScreen = ({ navigation }: any) => {
    // return (
    //     <Text>hgjfgjfgh</Text>
    // );
  useEffect(() => {
    // You can add logic to navigate to another screen after a delay
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen'); // Replace 'Home' with your main screen
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/Freshveg.jpg')} // Your logo image here
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Cookify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Splash screen background color
  },
  logo: {
    width: deviceWidth * 0.900,
    height: deviceHeight * 0.900,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
