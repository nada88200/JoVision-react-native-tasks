import React from 'react';
import {TextInput, StyleSheet, SafeAreaView} from 'react-native';

export default function MyFunctionPage({updateText}) {
  const handleTextChange = input => {
    updateText(input);
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        placeholder="Input Any Text"
        onChangeText={handleTextChange}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
  },
});
