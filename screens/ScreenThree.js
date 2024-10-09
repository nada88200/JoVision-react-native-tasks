import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenThree = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Three</Text>
      <Button
        title="Go to Screen One"
        onPress={() => navigation.navigate('ScreenOne')}
      />
      <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
      <Button
        title="Go to Screen Four"
        onPress={() => navigation.navigate('ScreenFour')}
      />
    </View>
  );
};

export default ScreenThree;
