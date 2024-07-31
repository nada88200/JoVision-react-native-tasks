import MyClassPage from '../components/ComponentFunction_20';
import React, {useState} from 'react';
import {View, Button} from 'react-native';

export default function Task20() {
  const [ShowPage, setShowPage] = useState(false);
  const HandlePress = () => {
    setShowPage(!ShowPage);
  };
  return (
    <View>
      <Button title="Show" onPress={HandlePress} />
      {ShowPage ? <MyClassPage /> : null}
    </View>
  );
}
