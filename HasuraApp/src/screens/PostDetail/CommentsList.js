import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.text}</Text>
  </View>
);

const CommentsList = ({comments}) => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f8f8f8',
    padding: 8,
    marginVertical: 2,
  },
  title: {
    fontSize: 18,
  },
});

export default CommentsList;
