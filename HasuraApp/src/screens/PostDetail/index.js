import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import Comments from './Comments';
import CommentForm from './CommentForm';

import {useQuery, useSubscription} from '@apollo/client';
import {GET_POST} from './queries';

const PostDetail = ({route}) => {
  const {id} = route.params;

  const {loading, error, data} = useSubscription(GET_POST, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading size="large" />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const {posts_by_pk} = data;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{posts_by_pk.title}</Text>
      <Text>{posts_by_pk.description}</Text>

      <Comments
        count={posts_by_pk.comments_aggregate.aggregate.count}
        postId={id}
      />

      <CommentForm postId={id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 28,
    marginVertical: 10,
  },
});

export default PostDetail;
