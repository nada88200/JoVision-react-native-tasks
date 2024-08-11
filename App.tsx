/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
//import Task16 from './Tasks/Task16';
//import Task17 from './Tasks/Task17';
//import Task18 from './Tasks/Task18';
//import Task19 from './Tasks/Task19';
//import Task20 from './Tasks/Task20';
//import Task21 from './Tasks/Task21';
//import Task22 from './Tasks/Task22';
//import Task23 from './Tasks/Task23';
//import Task24 from './Tasks/Task24';
//import Task25 from './Tasks/Task25';
//import Task26 from './Tasks/Task26';
import Task27 from './Tasks/Task27';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Task27 />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
