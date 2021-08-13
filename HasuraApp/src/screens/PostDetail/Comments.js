import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import CommentsList from './CommentsList';
import {useLazyQuery, useSubscription} from '@apollo/client';
import {GET_POST_COMMENTS} from './queries';

const Comments = ({count, postId}) => {
  const {loading, error, data} = useSubscription(GET_POST_COMMENTS, {
    variables: {
      id: postId,
    },
  });

  // useEffect(() => {
  //   const test = subscribeToMore({
  //     updateQuery: (data1, data2) => {
  //       console.log(data1);
  //       console.log(data2);
  //     },
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Comments ({count})</Text>
      </TouchableOpacity>

      {loading && <Text>Loading...</Text>}
      {data && <CommentsList comments={data.comments} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 26,
    color: 'blue',
  },
});

export default Comments;
