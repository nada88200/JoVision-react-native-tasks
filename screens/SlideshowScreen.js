import React, {useState, useEffect} from 'react';
import {View, Image, Button} from 'react-native';

const SlideshowScreen = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const toggleSlideshow = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <View>
      <Image
        source={{uri: images[currentIndex].uri}}
        style={{width: '100%', height: '100%'}}
      />
      <Button
        title={isPlaying ? 'Pause' : 'Resume'}
        onPress={toggleSlideshow}
      />
    </View>
  );
};

export default SlideshowScreen;
