import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const popularServices = [
    { id: '1', name: 'North Indian',},
    { id: '2', name: 'South Indian',},
    { id: '3', name: 'Continental',},
  ];

  const handleBookCook = () => {
    if (!selectedCuisine) {
      Alert.alert('Please select a cuisine before proceeding.');
      return;
    }
    navigation.navigate('CookBookingScreen', { cuisine: selectedCuisine });
  };

  const renderServiceItem = ({ item }) => {
    console.log('item',item);
    const isSelected = selectedCuisine === item.name;
    return (
      <TouchableOpacity
        style={[styles.serviceCard, isSelected && styles.selectedCard]}
        onPress={() => setSelectedCuisine(item.name)}
      >
        {/* <Image source={{ uri: item.image }} style={styles.serviceImage} /> */}
        <Image source={
      item.name === 'North Indian'
        ? require('../images/NorthIndianFoodImage.jpg')
        : item.name === 'South Indian'
        ? require('../images/southIndianImage.jpg')
        : item.name === 'Continental'
        ? require('../images/continentalFoodImage.webp')
        : require('../images/fallbackImage.jpg') // fallback image
    } style={styles.serviceImage}/>
        <Text style={[styles.serviceText, isSelected && styles.selectedText]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to CookEasy</Text>
        <Text style={styles.subText}>Find and book a cook for your needs</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for cuisines, cooks, or dishes..."
        placeholderTextColor="#888"
      />

      <Text style={styles.sectionTitle}>Choose a Cuisine</Text>
      <FlatList
        data={popularServices}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />

      <TouchableOpacity style={styles.bookCookButton} onPress={handleBookCook}>
        <Text style={styles.bookCookButtonText}>Book a Cook Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  flatList: {
    marginBottom: 20,
  },
  serviceCard: {
    marginRight: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
  },
  selectedCard: {
    borderColor: '#28a745',
    backgroundColor: '#e6f4ea',
  },
  serviceImage: {
    width: 85,
    height: 100,
    borderRadius: 10,
  },
  serviceText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#28a745',
  },
  bookCookButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  bookCookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
