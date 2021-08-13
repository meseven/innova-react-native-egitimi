import React from 'react';
import {View, Text} from 'react-native';

import {useSubscription} from '@apollo/client';
import {GET_POSTS} from './queries';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PostList from './PostList';

const Posts = () => {
  const {loading, error, data} = useSubscription(GET_POSTS);

  if (loading) {
    return <Loading size="large" />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View>
      <PostList posts={data.posts} />
    </View>
  );
};

export default Posts;
