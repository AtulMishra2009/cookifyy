// App.tsx
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './android/app/src/components/splashscreen';
import LoginScreen from './android/app/src/components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OtpScreen from './android/app/src/components/OtpScreen';
// import SplashScreen from './SplashScreen';
// import HomeScreen from './HomeScreen'; 
// Your main/home screen component

const Stack = createStackNavigator();

const App = () => {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header on splash screen
        />
        <Stack.Screen name="LoginScreen" 
         component={LoginScreen} 
         options={{ title: '' }}/>
         <Stack.Screen
    name="OtpScreen"
    component={OtpScreen}
    options={{ headerShown: false }}
  />
      </Stack.Navigator>
    </NavigationContainer>
    // <GestureHandlerRootView/>
  );
};

export default App;
