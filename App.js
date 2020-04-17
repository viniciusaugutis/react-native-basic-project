import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class App extends Component {
  state = {
    text: '',
    counter: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({text: 'Hello World!'});
    }, 3000);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {text: nextProps.text};
  }

  //define se render vai ser feito ou nao
  shouldComponentUpdate(nextProps, nextState) {
    return nextState && nextState.counter < 5;
  }

  //depois de render
  componentDidUpdate(prevProps, prevState) {}

  //semelhante onDestroy
  componentWillUnmount() {}

  handleAddCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Text>{this.state.counter}</Text>
        <Button title="Add" onPress={this.handleAddCounter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
