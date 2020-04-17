import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import Todo from './components/Todo';

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
      todos: [...this.state.todos, {id: Math.random(), text: 'Novo todo'}],
    });
  };

  render() {
    return (
      <View style={styles.container}>
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
    justifyContent: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
