// App.tsx
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/components/splashscreen';
import LoginScreen from './src/components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OtpScreen from './src/components/OtpScreen';
import HomeScreen from './src/components/HomeScreen';
import CookBookingScreen from './src/components/CookBookingScreen';
import CookDetailScreen from './src/components/CookDetailScreen';
import ThankYouScreen from './src/components/ThankYouScreen';
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
  <Stack.Screen name="HomeScreen" 
         component={HomeScreen} 
         options={{ title: '' }}/>
         <Stack.Screen
    name="homeScreen"
    component={HomeScreen}
    options={{ headerShown: false }}
  />
   <Stack.Screen name="CookBookingScreen" component={CookBookingScreen}
    options={{ headerShown: false }}
   />
   <Stack.Screen name="CookDetailScreen" component={CookDetailScreen} />

   <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />

      </Stack.Navigator>
      
    </NavigationContainer>
    // <GestureHandlerRootView/>
  );
};

export default App;
