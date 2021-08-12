import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {useChat} from '../context/ChatContext';

const Item = ({item}) => (
  <View
    style={[
      styles.itemContainer,
      {justifyContent: item.isFromMe ? 'flex-end' : 'flex-start'},
    ]}>
    <View
      style={[
        styles.item,
        {backgroundColor: item.isFromMe ? '#3ca4ff' : '#e9e9e9'},
      ]}>
      <Text style={[styles.title]}>{item.text}</Text>
    </View>
  </View>
);

const Messages = () => {
  const {messages} = useChat();

  return (
    <FlatList
      data={messages}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  item: {
    padding: 10,
    margin: 5,
    borderRadius: 7,
  },
  title: {
    fontSize: 20,
  },
});

export default Messages;
