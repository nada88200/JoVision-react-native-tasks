import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {textReducer} from '../redux/reducers';
import TextInputComponent from '../components/TextInputComponent';

const rootReducer = combineReducers({
  textReducer,
});

const store = createStore(rootReducer);

const Task39 = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <Provider store={store}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {showComponent && <TextInputComponent />}{' '}
        <Button
          title={showComponent ? 'Hide Component' : 'Show Component'}
          onPress={() => setShowComponent(prev => !prev)}
        />
      </View>
    </Provider>
  );
};

export default Task39;
