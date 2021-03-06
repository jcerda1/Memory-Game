import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';


export default class Card extends Component {
  constructor(props) {
    super(props) 
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({value}) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0,180],
      outputRange: ['180deg', '360deg'],
    })
  };
  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }
  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    };
    const backAnimatedStyle = {
      transform: [
       { rotateY: this.backInterpolate }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            if(this.props.currentSelection.length < 2) {
              this.flipCard()
            }
            this.props.updateSelection({id: this.props.id, name: this.props.name})}}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Image style={{height: '80%', width: '80%'}} source={require('../assets/linux.png')}/>
          </Animated.View>
          <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
            <Text>{this.props.name}</Text>
          </Animated.View>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flipCard: {
      borderWidth: 1, 
      borderColor: 'black',
      backgroundColor: '#EE82EE',
      width: 75,
      height: 125,
      margin: 5,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden'
    },
    flipCardBack: {
      backgroundColor: 'white',
      position: 'absolute',
      backfaceVisibility: 'hidden'
    }
  });
