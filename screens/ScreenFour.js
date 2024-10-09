import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenFour = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Four</Text>
      <Button
        title="Go to Screen One"
        onPress={() => navigation.navigate('ScreenOne')}
      />
      <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
      <Button
        title="Go to Screen Three"
        onPress={() => navigation.navigate('ScreenThree')}
      />
    </View>
  );
};

export default ScreenFour;
