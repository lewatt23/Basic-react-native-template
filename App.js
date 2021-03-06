import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './app/store';
import Main from  './app/components/Main'
import { createStore, applyMiddleware } from 'redux';
import reducers from './app/reducer';

const store = createStore(reducers);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
