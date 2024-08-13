import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import CatPic from '../Resources/Cat.webp';
import EarthPic from '../Resources/Earth.jpg';
import DogPic from '../Resources/DogAI.webp';
import AIgenerated from '../Resources/AI-generated.png';
import Cat1 from '../Resources/Cat1.webp';
import Cat2 from '../Resources/Cat2.jpg';
import Dog from '../Resources/Dog.webp';
import panda from '../Resources/panda.webp';
import space from '../Resources/space.jpg';
import tree from '../Resources/Tree.webp';

export default function Task28() {
  const [Picture] = useState([
    {name: CatPic, key: '1'},
    {name: EarthPic, key: '2'},
    {name: DogPic, key: '3'},
    {name: AIgenerated, key: '4'},
    {name: Cat1, key: '5'},
    {name: Cat2, key: '6'},
    {name: Dog, key: '7'},
    {name: panda, key: '8'},
    {name: space, key: '9'},
    {name: tree, key: '10'},
  ]);
  function PressImage(keys) {
    Alert.alert(`You have selected image: ${keys}`);
  }
  return (
    <SafeAreaView>
      <FlatList
        horizontal={true}
        data={Picture}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              PressImage(item.key);
            }}>
            <Image source={item.name} style={styles.image} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    marginTop: 300,
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
