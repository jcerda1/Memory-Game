import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import Card from './Card'


let CardList = (props) => {
  let cards = props.cards;
  let card = cards.map(item => {
    return (
      <Card value={item} />
    )
  })
  return (
    <View style={styles.card} >
      {card}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'stretch'
    },
  });
  


export default CardList;