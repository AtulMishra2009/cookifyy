import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRoute, useNavigation } from '@react-navigation/native';

const CookDetailScreen = () => {
  const { cook, cuisine } = useRoute().params;
  const navigation = useNavigation();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [pickerMode, setPickerMode] = useState(null);

  const showPicker = (mode) => setPickerMode(mode);

  const onChange = (event, selected) => {
    if (!selected) return setPickerMode(null);

    if (pickerMode === 'startDate') setStartDate(selected);
    else if (pickerMode === 'endDate') setEndDate(selected);
    else if (pickerMode === 'time') setTime(selected);

    setPickerMode(null);
  };

  const handleBooking = () => {
    if (!startDate || !endDate || !time) {
      Alert.alert('Please fill all fields.');
      return;
    }

    if (endDate < startDate) {
      Alert.alert('Invalid Date Range', 'End date must be after start date.');
      return;
    }

    navigation.navigate('ThankYouScreen', {
      cook,
      cuisine,
      startDate,
      endDate,
      selectedTime: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      selectedBookingType: `${Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1} Days`,
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Cook Info */}
        <View style={styles.detailCard}>
          <Text style={styles.name}>{cook.name}</Text>
          <Text style={styles.cuisine}>Cuisine: {cuisine}</Text>
          <Text style={styles.experience}>Experience: {cook.experience}</Text>
        </View>

        {/* Start Date */}
        <Text style={styles.label}>Start Date</Text>
        <TouchableOpacity style={styles.selector} onPress={() => showPicker('startDate')}>
          <Text style={styles.selectorText}>{startDate.toDateString()}</Text>
        </TouchableOpacity>

        {/* End Date */}
        <Text style={styles.label}>End Date</Text>
        <TouchableOpacity style={styles.selector} onPress={() => showPicker('endDate')}>
          <Text style={styles.selectorText}>{endDate.toDateString()}</Text>
        </TouchableOpacity>

        {/* Time Picker */}
        <Text style={styles.label}>Preferred Time</Text>
        <TouchableOpacity style={styles.selector} onPress={() => showPicker('time')}>
          <Text style={styles.selectorText}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>

        {pickerMode && (
          <DateTimePicker
            value={pickerMode === 'time' ? time : startDate}
            mode={pickerMode === 'time' ? 'time' : 'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
            minimumDate={new Date()}
          />
        )}
      </View>

      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book Cook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  detailCard: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    marginBottom: 20,
    elevation: 2,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cuisine: {
    fontSize: 16,
    marginTop: 4,
  },
  experience: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 20,
  },
  selector: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectorText: {
    fontSize: 16,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#28a745',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CookDetailScreen;
