import React, {useState, useRef} from 'react';
import {TextInput, SafeAreaView, View, StyleSheet} from 'react-native';
import MyClassPage from '../components/ComponentFunction_25';

export default function Task24() {
  const [text, setText] = useState('');
  const MyClassPageRef = useRef();

  const handleTextChange = input => {
    setText(input);
    if (MyClassPageRef.current) {
      MyClassPageRef.current.handleTextChange(input);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Type something..."
          value={text}
          onChangeText={handleTextChange}
          style={styles.TextInput}
        />
      </View>
      <MyClassPage ref={MyClassPageRef} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
