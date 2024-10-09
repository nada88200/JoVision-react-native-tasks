// Tasks/Task40.js
import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {textReducer} from '../redux/reducers';
import TextInputComponent from '../components/TextInputComponentClass';

const rootReducer = combineReducers({
  textReducer,
});

const store = createStore(rootReducer);

class Task40 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent,
    }));
  };

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {this.state.showComponent && <TextInputComponent />}
          <Button
            title={
              this.state.showComponent ? 'Hide Component' : 'Show Component'
            }
            onPress={this.toggleComponent}
          />
        </View>
      </Provider>
    );
  }
}

export default Task40;
