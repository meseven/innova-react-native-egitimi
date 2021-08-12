import React, {useEffect} from 'react';

import Form from './Form';
import Header from './Header';
import Messages from './Messages';

import {initializeSocket} from '../../socketApi';

const Container = () => {
  useEffect(() => {
    initializeSocket();
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
