import './config/ReactotronConfig';

import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

import Todo from './components/Todo';
import AppComponent from '../App';

console.tron.log('Hello');

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
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.boxText}>Oi</Text>
        </View>
      </View>
      /*<View style={styles.container}>
        <AppComponent />
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map((todo) => {
          return <Todo key={todo.id} title={todo.text} />;
        })}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>*/
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1, //ocupa todo espaço disponível
    flexDirection: 'row', //column ocupado sempre em coluna um abaixo do outro. row fica sempre um do lado do outro
    flexWrap: 'wrap', //sempre que item não couber na tela ele vai para baixo
    justifyContent: 'center', //controla o alinhamento de acordo com o flexdirection. Se flexDirection estiver column ele controla verticalmente. Se ele estiver row ele controla horizontalmente
    //flex-start: no começo da tela, flex=end: no fim da tela, space-between: espaço igual entre os elementos, space-around: espaço entre eles e no início e fim e tela
    alignItems: 'center', //faz o contrario do justifyContent. Se um alinha verticalmente o outro alinha horizontalmente
    //align-items por padrão é flex-start: começo da tela. flex-end: no fim da tela
    alignContent: 'center', //usado quando possui mais de uma linha e ele substitui o alignItems
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 20,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    transform: [{rotateZ: '10deg'}],
  },
  boxText: {
    color: '#FFF',
    fontSize: 20,
  },
});
