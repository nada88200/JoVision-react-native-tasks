import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
export default function Task16() {
  const [isVisible, setIsVisible] = useState(false);
  const ButtonPress = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View>
      {isVisible ? <Text>Nada</Text> : null}
      <Button title="Show" onPress={ButtonPress} />
    </View>
  );
}
