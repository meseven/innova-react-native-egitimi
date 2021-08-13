import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.text}</Text>
    <Text style={styles.owner}>{item.user.fullname}</Text>
  </View>
);

const CommentsList = ({comments}) => {
  console.log(comments);

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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },
  owner: {
    fontSize: 14,
  },
});

export default CommentsList;
