import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, ImageBackground, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FingerComponent from './FingerComponent';

import { GameEngine } from "react-native-game-engine";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

export default class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (

            <ImageBackground source={require('./img/5.png')} style={{
                width: WIDTH,
                height: HEIGHT
            }}>

            <Animated.Image source={require('./img/bob1.png')} style={{
                width: 100,
                height: 100,
                top: HEIGHT / 2,
                left: WIDTH / 2,
                alignItems: 'center',
            }}/>

           <View style={styles.controller}>
             <Icon name="arrow-circle-left" size={70} color="black" style={{
                margin: 10,

            }}/>
            <Icon name="arrow-circle-up" size={70} color="black" style={{
                margin: 10
            }}/>
            <Icon name="arrow-circle-down" size={70} color="black" style={{
                margin: 10
            }}/>
            <Icon name="arrow-circle-right" size={70} color="black" style={{
                margin: 10
            }}/>
           </View>

         



            </ImageBackground>




        );
    }
}


const styles = StyleSheet.create({
    controller: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        top: 450,
        justifyContent: 'center',

    },

});



