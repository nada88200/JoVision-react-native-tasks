import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MyFunctionPage from '../components/ComponentFunction_38';
export const Context = React.createContext();

export default function Task38() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Context.Provider value={[text, setText]}>
        <Text style={styles.text}>{text}</Text>
        <MyFunctionPage />
        <MyFunctionPage />
        <MyFunctionPage />
        <MyFunctionPage />
      </Context.Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
