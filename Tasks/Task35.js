import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task35() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    country: '',
    Timestamp: new Date().toString(),
  });
  useEffect(() => {
    RetrieveData();
  }, []);
  function handleNameChange(value) {
    if (value.length > 20) {
      Alert.alert(
        'Name too long',
        'Please enter a name with less than 20 characters.',
      );
      return;
    }
    setUser(U => ({...U, name: value}));
  }
  function handleAgeChange(value) {
    setUser(U => ({...U, age: value}));
  }
  function handleCountryChange(value) {
    setUser(U => ({...U, country: value}));
  }
  async function HandleButton() {
    setUser(U => ({...U, Timestamp: new Date().toString()}));
    try {
      if (user.name === '' || user.age === '' || user.country === '') {
        Alert.alert('Input Missing', 'Please fill out all fields.');
        return;
      }
      const userString = JSON.stringify(user);
      await AsyncStorage.setItem('user', userString);
      Alert.alert('Success', 'Data saved successfully.');
      console.log('success');
    } catch (error) {
      console.error(error);
    }
  }
  async function RetrieveData() {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        const storedTime = new Date(parsedValue.Timestamp).getTime();
        const newTime = new Date().getTime();

        if (newTime - storedTime < 1000 * 60) {
          setUser(parsedValue);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.TextName}>Name :</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleNameChange}
          value={user.name}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.TextAge}>Age :</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleAgeChange}
          keyboardType="numeric"
          value={user.age}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.Text}>Country :</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleCountryChange}
          value={user.country}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="black" onPress={HandleButton} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 60,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  Text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
    fontWeight: '500',
    marginTop: 11,
  },
  TextAge: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
    fontWeight: '500',
    marginRight: 32,
    marginTop: 11,
  },
  TextName: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
    fontWeight: '500',
    marginRight: 14,
    marginTop: 11,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
