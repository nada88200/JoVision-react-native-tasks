import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Context} from '../Tasks/Task38';

export default class MyClassPage extends Component {
  static contextType = Context;
  render() {
    const contextValue = this.context;
    if (!Array.isArray(contextValue)) {
      return (
        <View>
          <Text>Error: Context value is not an array.</Text>
        </View>
      );
    }
    const [text] = this.context;
    return (
      <View>
        <Text>{text}</Text>
      </View>
    );
  }
}
