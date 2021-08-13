import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

import {useMutation} from '@apollo/client';
import {INSERT_COMMENT} from './queries';

const CommentForm = ({postId}) => {
  const [comment, setComment] = useState('');

  const [insertComment, {data, loading, error}] = useMutation(INSERT_COMMENT);

  const onSubmit = () => {
    if (!comment) {
      return false;
    }

    insertComment({
      variables: {
        input: {
          user_id: 3,
          post_id: postId,
          text: comment,
        },
      },
    });

    setComment('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={setComment}
        returnKeyType="send"
        onEndEditing={onSubmit}
        editable={!loading}
      />
      {loading && <Text>Loading</Text>}
      {error && <Text>{JSON.stringify(error, null, 2)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderWidth: 2,
    borderColor: '#333',
    fontSize: 22,
  },
});

export default CommentForm;
