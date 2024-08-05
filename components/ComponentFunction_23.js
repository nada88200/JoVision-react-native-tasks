import React, {Component} from 'react';
import {TextInput, StyleSheet, SafeAreaView} from 'react-native';

export default class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleTextChange = text => {
    this.setState({inputValue: text});
    this.props.updateText(text);
  };
  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.textInput}
          placeholder="Input Any Text"
          onChangeText={this.handleTextChange}
          value={this.state.inputValue}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
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
