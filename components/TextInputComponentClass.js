import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {setText} from '../redux/actions';

class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.savedText,
    };
  }

  componentWillUnmount() {
    this.props.setText(this.state.text);
  }

  handleTextChange = text => {
    this.setState({text});
  };

  render() {
    return (
      <View>
        <TextInput
          style={{borderWidth: 1, padding: 10, margin: 10}}
          value={this.state.text}
          onChangeText={this.handleTextChange}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  savedText: state.textReducer.text,
});

const mapDispatchToProps = {
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInputComponent);
