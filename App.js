import 'react-native-gesture-handler';
import React from 'react';
import Navigation from '@navigation'
import { Provider } from 'react-redux';
import configureStore from './src/network/Store';

export default function App() {
  return (
    <Provider store={configureStore}>
      <Navigation />
    </Provider>
  );
};
