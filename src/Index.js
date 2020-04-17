import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

import Todo from './components/Todo';
import AppComponent from '../App';

export default class App extends Component {
  state = {
    usuario: 'Vinícius',
    todos: [
      {id: 0, text: 'Fazer o café'},
      {id: 1, text: 'Estudar react native'},
    ],
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: Math.random(), text: 'Vitinho apareceu'},
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AppComponent />
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map((todo) => {
          return <Todo key={todo.id} title={todo.text} />;
        })}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
