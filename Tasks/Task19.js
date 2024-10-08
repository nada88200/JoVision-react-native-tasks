import MyClassPage from '../components/ComponentFunction_19';
import React, {useState} from 'react';
import {View, Button} from 'react-native';

export default function Task19() {
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
