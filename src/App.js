import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import store from './store'
import { handleChange, handleSubmit } from './actions'

import {
AppRegistry,
View,
TextInput,
StyleSheet,
Button,
Text,
Switch,
Image,
Animated,
Easing,
TouchableOpacity,
TouchableHighlight


} from 'react-native'




class App extends React.Component {
  constructor(props){   
    super(props)
    this.spinValue = new Animated.Value(0)
    this.state = {
      test: [],
     
    }
    this.redo = this.redo.bind(this)
  }

  componentDidMount(){
    
    this.spin()
  }
 
  spin () {
    console.log(this.spinValue)
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start()
  }
  redo(){
    console.log(this.spinValue)
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        // easing: Easing.linear
      }
    ).start()

  }
  render(){
    console.log(this.state.try)
    const spin = this.spinValue.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [20, 60, 20]
      
    })

    const test = this.spinValue.interpolate({
      inputRange: [0,  1],
      outputRange: [20, 60]
      
    })
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source = {{uri:'http://www.lijsoccer.com/images/soccerBall.png'}}
          />
        </TouchableOpacity>
          OPACITY

        <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source = {{uri:'http://www.lijsoccer.com/images/soccerBall.png'}}
          />
        </TouchableHighlight>
          HIGHLIGHT

        <Animated.View
          onClick = {this.redo}
          style={{
            width: spin,
            backgroundColor: 'red',
            height: 200,
            transform: [{translate: test}]
          }}
        >
        font
        </Animated.View>
      </View>
     
     
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100
  },
  container: {
    position: 'relative',
    top: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

  
})

export default App;








