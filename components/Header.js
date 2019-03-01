import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';



export default class HeaderEx extends Component {
  render() {
    return (
      <View 
        style={
          {borderWidth: 1, 
           borderColor: 'black', 
           height: 50, width: '100%', 
           justifyContent: 'center',
           alignItems: 'center', 
           backgroundColor: '#401F3E'}
        }>
        <Text style={{color: 'white'}}>Memory Game</Text>
      </View>
    );
  }
}