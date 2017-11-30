import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, Animated, Text } from "react-native";
const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

export default class Enemy extends Component {
    /* constructor(props) {
         super(props);
         this.state = {
             upEnemy: new Animated.Value(HEIGHT),
             otherDirection: this.props.value //Init value for bob position

         };
     }
     componentDidMount() {
         Animated.timing( // Animate over time
             this.state.upEnemy, // The animated value to drive
             {
                 toValue: 0, // Animate to opacity: 1 (opaque)
                 duration: 3000, // Make it take a while
             }
         ).start(); // Starts the animation
     }*/

    render() {



        return (
            <Animated.Image source={require('./img/orange.png')}
            style={{

                width: 50,
                height: 50,
                left: this.props.startOrange,
                transform: [
                    {
                        translateY: this.props.upOrange
                    },]
            }} />




        )
    }
}