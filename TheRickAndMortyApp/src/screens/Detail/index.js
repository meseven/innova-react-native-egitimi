import React from 'react';
import {View, Text} from 'react-native';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import {useQuery} from '@apollo/client';
import {CHARACTER_QUERY} from './queries';

const Detail = ({route}) => {
  const {id} = route.params;

  const {loading, error, data} = useQuery(CHARACTER_QUERY, {
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <Loading size={'large'} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default Detail;
