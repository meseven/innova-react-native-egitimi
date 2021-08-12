import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

import {sendMessage} from '../../socketApi';
import {useChat} from '../context/ChatContext';

const Form = () => {
  const [message, setMessage] = useState('');

  const {setMessages} = useChat();

  const onSubmit = () => {
    setMessages(prevState => [...prevState, {text: message, isFromMe: true}]);
    sendMessage(message);
    setMessage('');
  };

  return (
    <TextInput
      placeholder="Enter message"
      autoCorrect={false}
      style={styles.textInput}
      returnKeyType="send"
      onEndEditing={onSubmit}
      value={message}
      onChangeText={setMessage}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#666',
    borderWidth: 2,
    paddingHorizontal: 10,
    fontSize: 16,
    margin: 2,
    backgroundColor: '#f9f9f9',
  },
});

export default Form;
