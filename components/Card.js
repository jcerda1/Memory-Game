import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';



let Card = (props) => {
  return (
    <View style={styles.card} >
      <TouchableOpacity >
        <View>
          <View>
            <Image style={{width: 50, height: 75}} source={require('../assets/penguin.png')}/>
          </View>
          <View>
            <Text>
              {props.value}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    card: {
      borderWidth: 1, 
      backgroundColor: '#EE82EE',
      margin: 5,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      borderColor: 'black',
      width: '22%',
      height: '22%',
      alignItems:'center',
      justifyContent: 'center',
    },
  });

export default Card;