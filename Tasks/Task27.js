import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Image, Button, Alert} from 'react-native';
import CatPic from '../Resources/Cat.webp';
import EarthPic from '../Resources/Earth.jpg';
import DogPic from '../Resources/DogAI.webp';

export default function Task27() {
  const [Picture, SetPicture] = useState('');
  function ChoosePicturesAlert() {
    Alert.alert(
      'Pick a Number ',
      'Please Choose 1,2 or 3 to Display a Picture ',
      [
        {text: '1', onPress: () => SetPicture(DogPic)},
        {text: '2', onPress: () => SetPicture(CatPic)},
        {text: '3', onPress: () => SetPicture(EarthPic)},
      ],
    );
  }
  return (
    <SafeAreaView>
      <Button title="Choose Image" onPress={ChoosePicturesAlert} />
      <Image source={Picture} style={styles.image} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
