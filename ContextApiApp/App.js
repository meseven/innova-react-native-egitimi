import React from 'react';
import Container from './src/components/Container';

import {ThemeContextProvider} from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
  );
};

export default App;
