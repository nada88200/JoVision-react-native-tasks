import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Text, View} from 'react-native';

export const MyFunctionPage = forwardRef((props, ref) => {
  const [displayText, setDisplayText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(input) {
      setDisplayText(input);
    },
  }));

  return (
    <View>
      <Text>{displayText}</Text>
    </View>
  );
});

export default MyFunctionPage;
