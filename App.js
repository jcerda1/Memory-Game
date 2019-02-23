import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import Home from './components/Home';
import Header from './components/Header';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ['Block', 'Block', 'Toy', 'Toy','Ball','Ball', 'Car', 'Car','Block', 'Block','Block', 'Block','Block', 'Block','Block', 'Block'],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#ff99cc', 'transparent']}
          style={styles.gradient}
        />
        <Header/>
        <Home cards={this.state.list}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33ccff'
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 600,
  }
});
