import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import Card from './Card'


let CardList = (props) => {
  let cards = props.cards;
  let card = cards.map((item,index) => {
    return (
      <Card key={index} name={item.name} id={item.id}/>
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
      padding: 15,
    },
  });
  


export default CardList;