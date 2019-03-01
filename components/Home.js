import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardList  from './CardList';


let Home = (props) => {
  return (
    <View style={styles.container}>
     <CardList updateSelection={props.updateSelection} cards={props.cards} />
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
