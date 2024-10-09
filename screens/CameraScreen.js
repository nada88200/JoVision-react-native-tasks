import React, {useState, useEffect} from 'react';
import {View, Button, Image, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      setPhoto(data.uri);
      Alert.alert('Save or Discard', 'Would you like to save this photo?', [
        {text: 'Discard', onPress: () => setPhoto(null)},
        {
          text: 'Save',
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={ref => setCamera(ref)}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      />
      <Button title="Take Picture" onPress={takePicture} />
      {photo && <Image source={{uri: photo}} style={{flex: 1}} />}
    </View>
  );
};

export default CameraScreen;
