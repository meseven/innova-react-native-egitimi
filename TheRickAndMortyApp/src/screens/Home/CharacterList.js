import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Item = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', {id: item.id})}>
      <Image source={{uri: item.image}} style={styles.img} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const CharacterList = ({data, navigation}) => {
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
