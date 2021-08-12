import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {useChat} from '../context/ChatContext';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Messages = () => {
  const {messages} = useChat();

  return (
    <FlatList
      data={messages}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 5,
    marginVertical: 1,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 16,
  },
});

export default Messages;
