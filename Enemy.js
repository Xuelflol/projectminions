import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, Animated, Text } from "react-native";

export default class Enemy extends Component {
    /* constructor(props) {
         super(props);
         this.state = {
             downEnemy: new Animated.Value(0),
             otherDirection: this.props.value //Init value for bob position

         };
     }
     componentDidMount() {
         Animated.timing( // Animate over time
             this.state.downEnemy, // The animated value to drive
             {
                 toValue: 600, // Animate to opacity: 1 (opaque)
                 duration: 3000, // Make it take a while
             }
         ).start(); // Starts the animation
     } */

    render() {


        return (
            <Animated.Image source={require('./img/banana.png')}
            style={{

                width: 50,
                height: 50,
                left: this.props.startEnemy,
                transform: [
                    {
                        translateY: this.props.downEnemy
                    },]
            }} />




        )
    }
}