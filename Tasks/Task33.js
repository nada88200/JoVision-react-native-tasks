import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

export default function Task32() {
  const [paused, setPaused] = useState(true);
  function handleButtonPress() {
    setPaused(!paused);
  }
  return (
    <View>
      <Text style={styles.Text}>Tour In JUST University</Text>
      <TouchableOpacity onPress={handleButtonPress}>
        <Video
          source={require('../Videos/just-university.mp4')}
          style={styles.video}
          resizeMode="cover"
          paused={paused}
          onEnd={() => setPaused(true)}
        />
      </TouchableOpacity>
      {paused && (
        <>
          <TouchableOpacity
            onPress={handleButtonPress}
            style={styles.posterContainer}>
            <Image
              source={require('../Videos/Library.jpg')}
              style={styles.poster}
            />
            <View style={styles.playButtonContainer}>
              <Image
                source={require('../Videos/playButton2.webp')}
                style={styles.playButtonImage}
              />
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
  posterContainer: {
    marginTop: 45,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: 300,
    height: 200,
  },
  playButtonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  playButtonImage: {
    width: 50,
    height: 50,
  },
});
