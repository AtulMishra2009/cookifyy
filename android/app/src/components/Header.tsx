import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Optional, for icons
import CImageConstants from './CImageConstants';

const Header = ({ title, onBackPress, rightButton, rightButtonPress }) => {
  return (
    <View style={styles.container}>
      {onBackPress ? (
        <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
          {/* <Ionicons name="arrow-back" size={24} color="#fff" /> */}
          <Image
            source={CImageConstants.arrow_back_black} // Replace with your back arrow image
            style={styles.backIcon}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}
      <Text style={styles.title}>{title}</Text>
      {rightButton ? (
        <TouchableOpacity onPress={rightButtonPress} style={styles.iconButton}>
          {/* <Image
            source={CImageConstants.arrow_back_black} // Replace with your back arrow image
            style={styles.backIcon}
          /> */}
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#6200EE',
    paddingHorizontal: 10,
    // height: 50,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 5,
  },
  spacer: {
    width: 30, // Matches the width of the icon button for alignment
  },

 backIcon: {
  width: 15,
  height: 15,
  paddingLeft: 20
},
});

export default Header;
