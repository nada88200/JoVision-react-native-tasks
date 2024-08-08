import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
    };
  }
  handleTextChange(text) {
    this.setState({displayText: text});
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
  },
});
