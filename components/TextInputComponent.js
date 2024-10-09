import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setText} from '../redux/actions';

const TextInputComponent = () => {
  const dispatch = useDispatch();
  const savedText = useSelector(state => state.textReducer.text);

  const [text, setTextState] = useState(savedText);

  useEffect(() => {
    return () => {
      dispatch(setText(text));
    };
  }, [text, dispatch]);

  return (
    <View>
      <TextInput
        style={{borderWidth: 1, padding: 10, margin: 10}}
        value={text}
        onChangeText={value => setTextState(value)}
      />
    </View>
  );
};

export default TextInputComponent;
