import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';
export default function Task18() {
  const [LoadingState, setLoadingState] = useState(true);
  const StopLoading = () => {
    setLoadingState(false);
  };
  useEffect(() => {
    const timeout = setTimeout(StopLoading, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      {LoadingState ? <ActivityIndicator size="large" /> : <Text>Nada</Text>}
      {LoadingState ? <Text>Loading ...</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
