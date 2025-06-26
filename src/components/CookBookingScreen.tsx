import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './Header';

const CookBookingScreen = () => {
    const navigation = useNavigation();
  const route = useRoute();
  const { cuisine } = route.params;

  const allCooks = {
    'North Indian': [
      { id: '1', name: 'Anjali Sharma', experience: '5 years' },
      { id: '2', name: 'Ramesh Verma', experience: '3 years' },
    ],
    'South Indian': [
      { id: '3', name: 'Lakshmi Iyer', experience: '6 years' },
      { id: '4', name: 'Kumar Swamy', experience: '4 years' },
    ],
    'Continental': [
      { id: '5', name: 'John Smith', experience: '7 years' },
      { id: '6', name: 'Emily Brown', experience: '2 years' },
    ],
  };

  const cooks = allCooks[cuisine] || [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate('CookDetailScreen', { cook: item, cuisine })}
  >
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.details}>Experience: {item.experience}</Text>
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        {/* <View style={styles.header}></View> */}
        <Header 
        title="" 
        onBackPress={() => navigation.goBack()} 
        rightButton="settings-outline" 
        rightButtonPress={() => console.log('Settings pressed')} 
      />
      <Text style={styles.title}>{cuisine} Cooks</Text>
      <FlatList
        data={cooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
//   header: {
//     marginBottom: 20,
//   },
});

export default CookBookingScreen;
