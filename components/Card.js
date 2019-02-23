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
      borderColor: 'black',
      width: '25%',
      height: '25%',
      alignItems:'center',
      justifyContent: 'center',
    },
  });

export default Card;