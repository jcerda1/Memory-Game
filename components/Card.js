import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';



let Card = (props) => {
  return (
    <View style={styles.card} >
      <Text>{props.value}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
      borderWidth: 1, 
      backgroundColor: '#EE82EE',
      margin: 5,
      shadowColor: 'black',
      shadowOffset: {width: 1, height: 2},
      borderColor: 'black',
      width: '22%',
      height: '22%',
      alignItems:'center',
      justifyContent: 'center',
    },
  });

export default Card;