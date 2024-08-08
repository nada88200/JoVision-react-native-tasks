import React, {useState, useRef} from 'react';
import {TextInput, SafeAreaView, View} from 'react-native';
import MyFunctionPage from '../components/ComponentFunction_24';

export default function Task24() {
  const [text, setText] = useState('');
  const myFunctionPageRef = useRef();

  const handleTextChange = input => {
    setText(input);
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(input);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Type something..."
          value={text}
          onChangeText={handleTextChange}
          style={{
            height: 40,
            borderColor: '#ccc',
            borderWidth: 3,
            marginBottom: 10,
            paddingHorizontal: 8,
          }}
        />
      </View>
      <MyFunctionPage ref={myFunctionPageRef} />
    </SafeAreaView>
  );
}
