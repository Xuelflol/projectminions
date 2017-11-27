
import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { GameLoop } from "react-native-game-engine";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");
const RADIUS = 25;

export default class FingerComponent extends Component {

    constructor() {
        super();
        this.state = {
            x: WIDTH / 2 - RADIUS,
            y: HEIGHT / 2 - RADIUS
        };
    }

    updateHandler = ({touches, screen, time}) => {
        let move = touches.find(x => x.type === "move");
        if (move) {
            this.setState({
                x: this.state.x + move.delta.pageX,
                y: this.state.y + move.delta.pageY
            });
        }
    };
    render() {
        return (
            <GameLoop onUpdate={this.updateHandler}>
              <View>

               <Image
            source={require('./img/bob1.png')} style={[styles.player, {
                left: this.state.x,
                top: this.state.y
            }]}/>
            
            </View>
              </GameLoop>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    player: {
        position: "absolute",
        //backgroundColor: "pink",
        width: 80,
        height: 80,
    // borderRadius: RADIUS * 2
    }
});
