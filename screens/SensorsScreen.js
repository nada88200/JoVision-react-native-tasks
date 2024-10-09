import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {accelerometer} from 'react-native-sensors';

const SensorsScreen = () => {
  const [location, setLocation] = useState(null);
  const [orientation, setOrientation] = useState({x: 0, y: 0, z: 0});

  useEffect(() => {
    const fetchLocation = () => {
      Geolocation.watchPosition(
        position => {
          setLocation(position.coords);
        },
        error => console.log(error),
        {enableHighAccuracy: true, distanceFilter: 0, interval: 10000},
      );
    };

    fetchLocation();

    const subscription = accelerometer.subscribe(({x, y, z}) => {
      setOrientation({x, y, z});
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>Location:</Text>
      {location && (
        <>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <Text>Altitude: {location.altitude}</Text>
          <Text>Speed: {location.speed}</Text>
        </>
      )}
      <Text>Orientation:</Text>
      <Text>X: {orientation.x}</Text>
      <Text>Y: {orientation.y}</Text>
      <Text>Z: {orientation.z}</Text>
    </View>
  );
};

export default SensorsScreen;
