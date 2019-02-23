import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


let Score = (props) => {
  return (
    <View style={style.container} >
        <Text style={style.textBold}>User Name:</Text> 
        <Text >Jeramiah</Text>
        <Text style={style.textBold}>User Score:</Text>
        <Text>10 points</Text>
    </View>
  )
};


const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    height: 30,
    borderColor: 'black',
    backgroundColor: '#e6f9ff',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  textBold: {
    fontWeight: 'bold',
  }
})


export default Score;