import React from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Item = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('PostDetail', {id: item.id, title: item.title})
      }>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const PostList = ({posts}) => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'antiquewhite',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 1,
  },
  title: {
    fontSize: 20,
  },
});

export default PostList;
