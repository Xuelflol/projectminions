import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, Animated, Text } from "react-native";
const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

export default class Melon extends Component {
    /* constructor(props) {
         super(props);
         this.state = {
             leftEnemy: new Animated.Value(WIDTH),
             otherDirection: this.props.value //Init value for bob position

         };
     }
     componentDidMount() {
         Animated.timing( // Animate over time
             this.state.leftEnemy, // The animated value to drive
             {
                 toValue: 0, // Animate to opacity: 1 (opaque)
                 duration: 5000, // Make it take a while
             }
         ).start(); // Starts the animation
     }*/

    render() {

        return (
            <Animated.Image source={require('./img/melon.png')}
            style={{

                width: 50,
                height: 50,
                top: this.props.startMelon,
                transform: [
                    {
                        translateX: this.props.leftMelon
                    },]
            }} />




        )
    }
}