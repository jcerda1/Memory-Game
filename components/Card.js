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
      width: '50%',
      height: '33%',
      alignItems:'center',
      justifyContent: 'center',
      flexBasis: '50%',
    },
  });

export default Card;