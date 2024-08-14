import React, {useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  View,
  Text,
  Button,
  TextInput,
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
  const [Picture, setPictures] = useState([
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
  const [textIndex, setTextIndex] = useState('');
  const FlatListRef = useRef(null);
  const TextInputRef = useRef(null);
  function PressImage(index) {
    Alert.alert(`You have selected image: ${index}`);
  }
  function RemovePicture(key) {
    setPictures(prevPictures => prevPictures.filter(item => item.key !== key));
  }
  function InputIndex(index) {
    if (FlatListRef.current && index >= 0 && index < Picture.length) {
      FlatListRef.current.scrollToIndex({
        animated: true,
        index: parseInt(index),
      });
    } else {
      Alert.alert(
        'Invalid Index',
        'Please enter a valid index between 0 and 9',
      );
    }
  }
  function handleButtonPress() {
    if (textIndex === '') {
      Alert.alert(
        'Input Required',
        'Please enter an index to show the picture.',
        [
          {
            text: 'OK',
            onPress: () => TextInputRef.current.focus(),
          },
        ],
      );
    } else {
      Alert.alert(
        'Image Index',
        'Please Input Index between 0-9 To Show Picture ',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => InputIndex(textIndex)},
        ],
      );
    }
  }
  return (
    <SafeAreaView>
      <View>
        <FlatList
          ref={FlatListRef}
          horizontal={true}
          data={Picture}
          renderItem={({item, index}) => (
            <View>
              <Pressable
                onPress={() => {
                  PressImage(index);
                }}>
                <Image source={item.name} style={styles.image} />
              </Pressable>
              <Pressable
                onPress={() => RemovePicture(item.key)}
                style={styles.icon}>
                <Text>Remove</Text>
              </Pressable>
            </View>
          )}
        />
        <Button title="Show Image" onPress={handleButtonPress} />
        <TextInput
          ref={TextInputRef}
          style={styles.input}
          placeholder="Insert Index Of Image..."
          placeholderTextColor="#999"
          keyboardType="numeric"
          onChangeText={setTextIndex}
          value={textIndex}
        />
      </View>
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
    elevation: 5,
  },
  icon: {
    marginTop: 250,
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255,20,147,0.8)',
    borderRadius: 10,
    padding: 5,
    zIndex: 1,
    elevation: 5,
  },
  input: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
});
