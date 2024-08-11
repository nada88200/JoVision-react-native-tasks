import React, {useState} from 'react';
import {Text, Button, SafeAreaView, ActivityIndicator} from 'react-native';

export default function Task26() {
  const [text, setText] = useState('');
  const [LoadingState, setLoadingState] = useState(false);
  function HandlePressButton1() {
    fetch('https://api.ipify.org/?format=json')
      .then(Response => Response.json())
      .then(data => {
        setText(data.ip);
      })
      .catch(error => {
        console.error(error);
      });
  }
  async function HandlePressButton2() {
    try {
      setLoadingState(true);
      const Response = await fetch('https://api.ipify.org/?format=json');
      const data = await Response.json();
      setText(data.ip);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingState(false);
    }
  }

  return (
    <SafeAreaView>
      <Button title="Press" onPress={HandlePressButton1} />
      {LoadingState ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Press" onPress={HandlePressButton2} />
      )}
      <Text>{text}</Text>
    </SafeAreaView>
  );
}
