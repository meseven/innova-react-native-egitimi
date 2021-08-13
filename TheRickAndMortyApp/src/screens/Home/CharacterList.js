import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

const Item = ({item}) => (
  <View style={styles.item}>
    <Image source={{uri: item.image}} style={styles.img} />
    <Text style={styles.title}>{item.name}</Text>
  </View>
);

const CharacterList = ({data}) => {
  const {
    characters: {results},
  } = data;

  return (
    <View styles={styles.container}>
      <FlatList
        data={results}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    paddingHorizontal: 10,
  },
  img: {
    width: 100,
    height: 100,
  },
});

export default CharacterList;
