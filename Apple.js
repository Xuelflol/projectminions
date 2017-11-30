import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, Animated, Text } from "react-native";
const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

export default class Enemy extends Component {
    /*  constructor(props) {
          super(props);
          this.state = {
              rightEnemy: new Animated.Value(0),
              otherDirection: this.props.value, //Init value for bob position
              speed: 5000,

          };
      }
      componentDidMount() {
          Animated.timing( // Animate over time
              this.state.rightEnemy, // The animated value to drive
              {
                  toValue: 400, // Animate to opacity: 1 (opaque)
                  duration: this.state.speed, // Make it take a while
              }
          ).start(); // Starts the animation
          setInterval(() => {
              this.setState({
                  speed: this.state._value - 100
              })
          }, 20000);
      } */

    render() {

        return (
            <Animated.Image source={require('./img/hema.png')}
            style={{

                width: 50,
                height: 50,
                top: this.props.startApple,
                transform: [
                    {
                        translateX: this.props.rightApple
                    },]
            }} />




        )
    }
}