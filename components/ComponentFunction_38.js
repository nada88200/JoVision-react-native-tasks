import React, {useContext} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Context} from '../Tasks/Task38';
import MyClassPage from './ComponentClass_38';

export default function MyFunctionPage() {
  const [text, setText] = useContext(Context);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type Here..."
        onChangeText={newtext => setText(newtext)}
      />
      <MyClassPage />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});
