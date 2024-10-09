import React from 'react';
import {View, FlatList, Image, RefreshControl} from 'react-native';

const GalleryScreen = ({images}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Image source={{uri: item.uri}} style={{width: 100, height: 100}} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default GalleryScreen;
