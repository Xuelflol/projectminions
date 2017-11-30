import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, ImageBackground, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Enemy from './Enemy';
import Apple from './Apple';
import Melon from './Melon';
import Orange from './Orange';

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
            gameOver: false,
            enemyIdentity: -1,
            Speed: 5010,
            //initial state for Enemy
            enemyStart: new Animated.Value(Math.floor(Math.random() * WIDTH * 0.5)),
            melonStart: new Animated.Value(Math.floor(Math.random() * HEIGHT * 0.5)),
            enemyDown: new Animated.Value(0),
            appleRight: new Animated.Value(0),
            melonLeft: new Animated.Value(WIDTH),
            orangeUp: new Animated.Value(HEIGHT),
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
    componentDidMount() {
        this.animatedEnemy();
    }
    animatedEnemy() {
        var r = Math.floor(Math.random() * 4) + 1;
        var refreshCheck;
        if (this.state.Speed._value > 500) {
            this.setState({
                Speed: this.state.Speed - 10
            })
        }

        /* setInterval(() => {
             this.setState({
                 Speed: this.state.Speed._value - 0
             })
         }, 10000); */
        //console.log("faster");

        //Enemy will appear
        if (r == 1) {

            var a = this.state.moveBob._value;
            var b = this.state.enemyDown._value;
            var c = this.state.flyBob._value;
            var d = this.state.enemyStart._value;
            // var result = Math.sqrt(a - d) + Math.sqrt(c - b);
            const result = 2600;

            this.setState({
                enemyIdentity: 0 //enemy
            })

            refreshCheck = setInterval(() => {
                if (result <= 2500) {
                    clearInterval(refreshCheck)
                    this.setState({
                        gameOver: true
                    });
                    this.gameOver();
                }
            }, 50);
            Animated.timing(
                this.state.enemyDown,
                {
                    toValue: HEIGHT,
                    duration: this.state.Speed,
                }
            ).start(event => {
                if (event.finished && this.state.gameOver == false) {
                    clearInterval(refreshCheck);
                    this.setState({
                        points: ++this.state.points
                    });
                    this.setState({
                        enemyDown: new Animated.Value(0)
                    });
                    console.log("enemy starts at y-axis" + this.state.enemyDown);
                    this.setState({
                        enemyStart: new Animated.Value(a)
                    })
                    console.log("enemy starts at x-axis" + this.state.enemyStart);


                    this.animatedEnemy();
                    console.log('again');
                    console.log(b + 'y-axis');
                    console.log(d + 'x-axis');
                    console.log(HEIGHT);
                }
            });
            console.log('Enemy')

        } else if (r == 2) {
            var xa = this.state.moveBob._value;
            var xb = this.state.appleRight._value;
            var ya = this.state.flyBob._value;
            var yb = this.state.melonStart._value;
            this.setState({
                enemyIdentity: 1 //apple
            })
            Animated.timing(
                this.state.appleRight,
                {
                    toValue: WIDTH,
                    duration: this.state.Speed,
                }
            ).start(event => {
                if (event.finished && this.state.gameOver == false) {
                    clearInterval(refreshCheck);
                    this.setState({
                        points: ++this.state.points
                    });

                    this.setState({
                        appleRight: new Animated.Value(0)
                    });
                    this.setState({
                        melonStart: new Animated.Value(ya)
                    })
                    this.animatedEnemy();
                }
            });
            console.log('Apple')
        } else if (r == 3) {
            var xa = this.state.moveBob._value;
            var xb = this.state.enemyStart._value;
            var ya = this.state.flyBob._value;
            var yb = this.state.orangeUp._value;
            this.setState({
                enemyIdentity: 2 //orange
            })
            Animated.timing(
                this.state.orangeUp,
                {
                    toValue: 0,
                    duration: this.state.Speed / 2,
                }
            ).start(event => {
                if (event.finished && this.state.gameOver == false) {
                    clearInterval(refreshCheck);
                    this.setState({
                        points: ++this.state.points
                    });
                    this.setState({
                        orangeUp: new Animated.Value(HEIGHT)
                    });
                    this.setState({
                        enemyStart: new Animated.Value(xa)
                    })
                    this.animatedEnemy();
                }
            });
            console.log('Orange')
        } else if (r == 4) {
            var xa = this.state.moveBob._value;
            var xb = this.state.melonLeft._value;
            var ya = this.state.flyBob._value;
            var yb = this.state.melonStart._value;
            this.setState({
                enemyIdentity: 3 //melon
            })
            Animated.timing(
                this.state.melonLeft,
                {
                    toValue: 0,
                    duration: this.state.Speed / 2,
                }
            ).start(event => {
                if (event.finished && this.state.gameOver == false) {
                    clearInterval(refreshCheck);
                    this.setState({
                        points: ++this.state.points
                    });
                    this.setState({
                        melonLeft: new Animated.Value(WIDTH)
                    });
                    this.setState({
                        melonStart: new Animated.Value(ya)
                    });
                    this.animatedEnemy();
                }
            });
            console.log('Melon')
        }
    }
    gameOver() {
        alert("try it again!");
    }


    render() {
        const Enemys = [];
        Enemys.push(<Enemy startEnemy = {this.state.enemyStart} downEnemy = {this.state.enemyDown}/>);
        Enemys.push(<Apple startApple = {this.state.melonStart} rightApple = {this.state.appleRight}/>);
        Enemys.push(<Orange startOrange = {this.state.enemyStart} upOrange = {this.state.orangeUp}/>);
        Enemys.push(<Melon startMelon = {this.state.melonStart} leftMelon = {this.state.melonLeft}/>);

        return (


            <ImageBackground source={require('./img/5.png')} style={{
                width: WIDTH,
                height: HEIGHT
            }}>
           <View>
           {Enemys[this.state.enemyIdentity]}
           </View>
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
        top: 350,
        justifyContent: 'center',

    },
    points: {

    }

});



