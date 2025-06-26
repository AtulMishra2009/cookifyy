// ThankYouScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const ThankYouScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { cook, cuisine, startDate, endDate, selectedTime, selectedBookingType } = params;

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/ThankuPageImage.jpg')} // Use your local asset or an online image
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.subtitle}>Your cook has been successfully booked.</Text>

      <View style={styles.detailsCard}>
        <Text style={styles.detail}><Text style={styles.label}>Cook:</Text> {cook.name}</Text>
        <Text style={styles.detail}><Text style={styles.label}>Cuisine:</Text> {cuisine}</Text>
        <Text style={styles.detail}><Text style={styles.label}>Booking Type:</Text> {selectedBookingType}</Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Duration:</Text> {startDate.toDateString()} to {endDate.toDateString()}
        </Text>
        <Text style={styles.detail}><Text style={styles.label}>Time:</Text> {selectedTime}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: 180,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28a745',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  detailsCard: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    marginBottom: 30,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    color: '#222',
  },
  detail: {
    fontSize: 16,
    marginVertical: 4,
    color: '#444',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThankYouScreen;
