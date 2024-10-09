import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenTwo = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Two</Text>
      <Button
        title="Go to Screen One"
        onPress={() => navigation.navigate('ScreenOne')}
      />
      <Button
        title="Go to Screen Three"
        onPress={() => navigation.navigate('ScreenThree')}
      />
      <Button
        title="Go to Screen Four"
        onPress={() => navigation.navigate('ScreenFour')}
      />
    </View>
  );
};

export default ScreenTwo;
