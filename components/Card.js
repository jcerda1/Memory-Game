import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';


export default class Card extends Component {
  constructor(props) {
    super() 
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
      <View style={styles.card} >
        <TouchableOpacity onPress={() => this.flipCard()} >
          <View>
            <Animated.View style={frontAnimatedStyle}>
              <Image style={{width: 50, height: 75}} source={require('../assets/penguin.png')}/>
            </Animated.View>
            <Animated.View style={[styles.flipCard, backAnimatedStyle]}>
              <Text>
                {this.props.value}
              </Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
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
    flipCard: {
      backfaceVisibility: 'hidden'
    }
  });
