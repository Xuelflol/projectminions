import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, ImageBackground, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Enemy from './Enemy';
import Apple from './Apple';
import Melon from './Melon';

import { GameEngine } from "react-native-game-engine";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveBob: new Animated.Value(40), //Init value for bob position
            flyBob: new Animated.Value(200),
            side: 'left',
            points: 0,


        };
    }

    moveIt(direction) {
        let current = this.state.moveBob._value;

        if (direction == 'right') {
            this.setState({
                side: 'right',

            })

            Animated.spring(
                this.state.moveBob,
                {
                    toValue: current + 30,
                    tension: 100
                }
            ).start();
        } else if (direction == 'left') {
            this.setState({
                side: 'left'
            })

            Animated.spring(
                this.state.moveBob,
                {
                    toValue: current - 30,
                    tension: 100,
                }
            ).start();
        } else if (direction == 'up') {


            Animated.spring(
                this.state.flyBob,
                {
                    toValue: this.state.flyBob._value - 30,
                    tension: 100,
                }
            ).start();
        } else if (direction == 'down') {


            Animated.spring(
                this.state.flyBob,
                {
                    toValue: this.state.flyBob._value + 30,
                    tension: 100,
                }
            ).start();
        }

    }
    render() {
        return (

            <ImageBackground source={require('./img/5.png')} style={{
                width: WIDTH,
                height: HEIGHT
            }}>

            <Enemy value= {this.state.moveBob._value}/>
            <Apple value= {this.state.flyBob._value}/>
            <Melon value= {this.state.moveBob._value}/>


            <Animated.Image source={require('./img/bob1.png')} style={{
                width: 50,
                height: 50,


                transform: [
                    {
                        translateX: this.state.moveBob
                    },
                    {
                        translateY: this.state.flyBob
                    },
                ]


            }}/>

           <View style={styles.controller}>
             <Icon name="arrow-circle-left" size={70} color="black" style={{
                margin: 10,

            }} onPress={() => this.moveIt('left')}/>
            <Icon name="arrow-circle-up" size={70} color="black" style={{
                margin: 10
            }} onPress={() => this.moveIt('up')}/>
            <Icon name="arrow-circle-down" size={70} color="black" style={{
                margin: 10
            }} onPress={() => this.moveIt('down')}/>
            <Icon name="arrow-circle-right" size={70} color="black"
            style={{
                margin: 10
            }} onPress={() => this.moveIt('right')}
            />
            
          
           </View>
           <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: 'transparent',
                height: 10,
                width: 50,
                top: 10

            }}>
             <Icon name="trophy" size={30} style={{
                margin: 0,
                backgroundColor: 'transparent'
            }}/>
            <Text style={{
                fontSize: 30
            }}>{this.state.points}</Text>
            
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
        top: 400,
        justifyContent: 'center',

    },
    points: {

    }

});



