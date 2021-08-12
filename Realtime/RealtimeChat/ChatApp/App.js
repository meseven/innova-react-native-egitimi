import React from 'react';

import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';

import {ChatProvider} from './src/context/ChatContext';

import Container from './src/components/Container';

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={styles.inner}>
        <ChatProvider>
          <Container />
        </ChatProvider>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
  },

  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default App;
