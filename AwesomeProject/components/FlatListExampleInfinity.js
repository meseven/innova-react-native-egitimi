import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text numberOfLines={1} style={styles.title}>
      {title}
    </Text>
  </View>
);

let duringMomentum = false;

export const FlatListExampleInfinity = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=40`)
      .then(data => data.json())
      .then(res => {
        setPosts(p => [...p, ...res.data]);
        console.log(posts);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, [page]);

  const loadMore = () => {
    if (!duringMomentum) {
      setPage(p => p + 1);

      duringMomentum = true;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ActivityIndicator size="large" />}

      {!loading && <Text>{posts.length} adet kayıt bulundu</Text>}
      {!loading && posts.length > 0 && (
        <FlatList
          data={posts}
          renderItem={({item}) => <Item title={item.name} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0}
          onMomentumScrollBegin={() => {
            duringMomentum = false;
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
