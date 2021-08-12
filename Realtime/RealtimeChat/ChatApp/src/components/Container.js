import React, {useEffect} from 'react';

import Form from './Form';
import Header from './Header';
import Messages from './Messages';

import {initializeSocket, subscribeToChat} from '../../socketApi';
import {useChat} from '../context/ChatContext';

const Container = () => {
  const {setMessages} = useChat();

  useEffect(() => {
    initializeSocket();

    subscribeToChat((message, error) => {
      setMessages(prevState => [...prevState, {text: message}]);
    });
  }, []);

  return (
    <>
      <Header />
      <Messages />
      <Form />
    </>
  );
};

export default Container;
