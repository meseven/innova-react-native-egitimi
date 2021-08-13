import React from 'react';
import {View, Text} from 'react-native';

import {useQuery} from '@apollo/client';
import {CHARACTERS_QUERY} from './queries';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CharacterList from './CharacterList';

const Home = () => {
  const {loading, error, data} = useQuery(CHARACTERS_QUERY);

  if (loading) {
    return <Loading size={'large'} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View>
      <CharacterList data={data} />
    </View>
  );
};

export default Home;
