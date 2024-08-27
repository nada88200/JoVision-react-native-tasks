import React, {useState, useCallback} from 'react';
import {StyleSheet, View, Text, ScrollView, RefreshControl} from 'react-native';

export default function Task36() {
  const randomTexts = Array.from({length: 100}, () => generateRandomWord(10));
  const [refreshing, setRefreshing] = useState(false);
  const [generated, setGenerated] = useState(generateRandomWord());
  function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setGenerated(generateRandomWord());
      setRefreshing(false);
    }, 500);
  }, []);
  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {randomTexts.map((text, index) => (
          <Text key={index} style={styles.text}>
            {text}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});
