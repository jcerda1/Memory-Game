import React from 'react';
import { StyleSheet, Text, View, AlertIOS } from 'react-native';
import { LinearGradient } from 'expo';
import Home from './components/Home';
import Header from './components/Header';
import Score from './components/Score';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      score: 0,
      list: ['Block', 'Block', 'Toy', 'Toy','Ball','Ball', 'Car', 'Car','Block', 'Block','Block', 'Block','Block', 'Block','Block', 'Block'],
    }
  }
  componentDidMount() {
    AlertIOS
      .prompt('Please enter your name', null, 
        (text) => this.setUserName(text));
  }
  setUserName(userName) {
    if(userName === "") {
      this.setState({userName: "user"})
    } else {
      userName = userName.slice(0,8)
      this.setState({userName})
    }
  }
  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#ff99cc', 'transparent']}
          style={styles.gradient}
        />
        <Header/>
        <Score userName={this.state.userName} score={this.state.score}/>
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
    minHeight: 600,
  }
});
