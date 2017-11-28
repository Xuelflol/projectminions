import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, Animated, Text } from "react-native";
const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

export default class Enemy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            throwEnemy: new Animated.Value(0), //Init value for bob position

        };
    }
    componentWillMount() {
        Animated.timing( // Animate over time
            this.state.throwEnemy, // The animated value to drive
            {
                toValue: 400, // Animate to opacity: 1 (opaque)
                duration: 5000, // Make it take a while
            }
        ).start(); // Starts the animation
    }

    render() {


        let {dropEnemy} = this.state
        return (
            <Animated.Image source={require('./img/hema.png')}
            style={{

                width: 50,
                height: 50,
                top: this.props.value + 40,
                transform: [
                    {
                        translateX: this.state.throwEnemy
                    },]
            }} />




        )
    }
}