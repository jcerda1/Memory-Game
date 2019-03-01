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
      list: [{id: 1, name: 'Block'},{id: 2, name: 'Block'}, {id: 3, name:'Toy'},
             {id: 4, name:'Toy'},{id: 5, name:'Ball'},{id: 6, name:'Ball'},
             {id: 7, name: 'Car'}, {id: 8, name:'Car'},{id: 9, name: 'Truck'}, 
             {id: 10, name:'Truck'},{id: 11, name:'Train'},{id: 12, name: 'Train'},
             {id: 13, name: 'Ring'},{id: 14, name: 'Ring'},
             {id: 15, name: 'Dog'},{id: 16, name: 'Dog'}],
      currentSelection: [],
    }
    this.updateSelection = this.updateSelection.bind(this);
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
  updateSelection(selection) {
    let copyOfCurrentSelection = this.state.currentSelection.slice();
    let copyOfList = this.state.list.slice();
      copyOfCurrentSelection.push(selection);
      this.setState({currentSelection: copyOfCurrentSelection});
    if(this.state.currentSelection.length === 2) {
      if(this.state.currentSelection[0].name === this.state.currentSelection[1].name) {
        for(var i = 0; i < copyOfList.length; i++) {
          if(copyOfList[i].id === this.state.currentSelection[0].id 
            || copyOfList[i].id === this.state.currentSelection[1].id) {
            copyOfList.splice(i, 1)
            i = 0;
          }
        }
        this.setState({list: copyOfList})
        this.setState({currentSelection: []})
      } else {
        this.setState({currentSelection: []})
      }
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
        <Score userName={this.state.userName} score={this.state.score}/>
        <Home updateSelection={this.updateSelection} cards={this.state.list}/>
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
