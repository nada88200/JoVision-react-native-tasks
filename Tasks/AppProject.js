import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CameraScreen from './screens/CameraScreen';
import SensorsScreen from './screens/SensorsScreen';
import GalleryScreen from './screens/GalleryScreen';
import SlideshowScreen from './screens/SlideshowScreen';

const Stack = createStackNavigator();

const AppProject = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Sensors" component={SensorsScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Slideshow" component={SlideshowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppProject;
