import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo title="Estudar React Native" />
        <Todo title="Estudar React Native 2" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
