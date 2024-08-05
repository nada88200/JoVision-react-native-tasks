import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MyClassPage from '../components/ComponentFunction_23';

export default function Task23() {
  const [TextInput, setTextInput] = useState('');
  return (
    <View>
      <Text>{TextInput}</Text>
      <MyClassPage updateText={setTextInput} />
    </View>
  );
}
