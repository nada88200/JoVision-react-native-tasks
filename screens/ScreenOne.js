import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenOne = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen One</Text>
      <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
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

export default ScreenOne;
