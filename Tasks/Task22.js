import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MyFunctionPage from '../components/ComponentFunction_22';

export default function Task22() {
  const [TextInput, setTextInput] = useState('');
  return (
    <View>
      <Text>{TextInput}</Text>
      <MyFunctionPage updateText={setTextInput} />
    </View>
  );
}
