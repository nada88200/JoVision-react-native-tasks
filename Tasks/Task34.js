import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Task34() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const Interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(Interval);
  }, []);
  return (
    <View>
      <Text style={styles.Text}>{time.toLocaleDateString()}</Text>
      <Text style={styles.Text}>{time.toLocaleTimeString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    color: 'red',
  },
});
