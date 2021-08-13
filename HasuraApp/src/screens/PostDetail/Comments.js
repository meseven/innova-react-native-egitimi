import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import CommentsList from './CommentsList';
import {useLazyQuery} from '@apollo/client';
import {GET_POST_COMMENTS} from './queries';

const Comments = ({count, postId}) => {
  const [getComments, {loading, error, data}] = useLazyQuery(
    GET_POST_COMMENTS,
    {
      variables: {
        id: postId,
      },
    },
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getComments}>
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
