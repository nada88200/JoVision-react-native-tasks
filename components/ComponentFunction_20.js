import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class MyClassPage extends Component {
  componentDidMount() {
    console.log('Loaded...');
  }

  componentWillUnmount() {
    console.log('unloaded...');
  }

  render() {
    return (
      <View>
        <Text>Hello from My Class Page</Text>
      </View>
    );
  }
}
