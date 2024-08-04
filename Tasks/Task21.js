import MyFunctionPage from '../components/ComponentFunction_21';
import React, {useState} from 'react';
import {View, Button} from 'react-native';

export default function Task21() {
  const [ShowPage, setShowPage] = useState(false);
  const HandlePress = () => {
    setShowPage(!ShowPage);
  };
  return (
    <View>
      <Button title="Show" onPress={HandlePress} />
      {ShowPage ? <MyFunctionPage /> : null}
    </View>
  );
}
