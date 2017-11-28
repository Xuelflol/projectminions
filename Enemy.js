import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, Animated, Text } from "react-native";

export default class Enemy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropEnemy: new Animated.Value(0), //Init value for bob position

        };
    }
    componentWillMount() {
        Animated.timing( // Animate over time
            this.state.dropEnemy, // The animated value to drive
            {
                toValue: 600, // Animate to opacity: 1 (opaque)
                duration: 3000, // Make it take a while
            }
        ).start(); // Starts the animation
    }

    render() {


        let {dropEnemy} = this.state
        return (
            <Animated.Image source={require('./img/banana.png')}
            style={{

                width: 50,
                height: 50,
                left: this.props.value,
                transform: [
                    {
                        translateY: this.state.dropEnemy
                    },]
            }} />




        )
    }
}