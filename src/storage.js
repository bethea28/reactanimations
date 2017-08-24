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
Image


} from 'react-native'




class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      test: [],
      testInput: '',
      try: props.testInput
    }

    this.handleText = this.handleText.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleText(event){
    this.setState({[event.target.name] : event.target.value})
    console.log(this.state.testInput)
  }

  handleClick(event){
    event.preventDefault()
    console.log('here')
    this.setState({ test: this.state.test.concat(this.state.testInput) })
    console.log(this.state.test)
  }

  render(){
    console.log(this.state.try)
    return (
      <View style = {styles.mainContainer}>
        <View style = {styles.phoneContainer}>
          <View style = {styles.containertop}>
           Top
          </View>
          <View style = {styles.containerMiddle}>

            <View style = {styles.topMiddle}>
              <View style = {styles.arrowLeft}>
                arrowLeft
              </View>

              <View style = {styles.mls}>
                MLS
              </View>
              <View style = {styles.arrowRight}>
                Arrow
              </View>
            </View>

            <View style = {styles.middle}>
              <Image 
              style = {styles.imageOne}
              source = {{uri:'http://www.bmysl.org/_uploads/57f6aca5626dcd71524f9628/soccer.jpg'}}
              />
              <View style = {styles.score}>
                <Text>
                FINAL
                </Text>
                <Text>
                2:2
                </Text>
              </View>

              <Image 
              style = {styles.imageTwo}
              source = {{uri:'http://www.bmysl.org/_uploads/57f6aca5626dcd71524f9628/soccer.jpg'}}
              />

            </View>
            <View style = {styles.record}>
              {/* <View> */}
                <Text style = {styles.test}>
                  POR
                </Text>
                
                <Text style = {styles.test}>
                  6-8
                </Text>
                
                <Text style = {styles.test}>
                  2ND IN W
                </Text>
              {/* </View> */}
              
            </View>
          </View>
        
        </View>
        
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  test: {
    borderStyle: "solid",
    borderColor: 'black',
    borderWidth: 1,
    // display: 'flex',
    // flexDirection: 'column'

  },
  score: {

    borderStyle: "solid",
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'column',
    alignItems: 'center'
    
    
  },
  middle: {
    borderStyle: "solid",
    borderColor: 'pink',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
    // height: 50

  },
  arrowLeft: {
    borderStyle: "solid",
    borderColor: 'pink',
    borderWidth: 1,
    right: 28
    
  },
  arrowRight: {
    borderStyle: "solid",
    borderColor: 'pink',
    borderWidth: 1,
    left: 28
    
  },
  mls: {
    borderStyle: "solid",
    borderColor: 'pink',
    borderWidth: 1,
    right: 15
    
  },
  button: {
    display:'flex',
    flexDirection: 'row',
    // height: 5,
    // position: 'relative',
    // left: 28,
    fontSize: 10
  },

  record: {
    borderStyle: "solid",
    borderColor: 'blue',
    borderWidth: 1,
    height: 100,
    display: 'flex,',
    flexDirection: 'row'
    

  },
  recordOne: {
    borderStyle: "solid",
    borderColor: 'blue',
    borderWidth: 1,
    // display: 'flex,',
    // flexDirection: 'row'
    

  },
  finalScoreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleImages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderStyle: "solid",
    borderColor: 'purple',
    borderWidth: 1,

  },
  imageOne : {
    borderStyle: "solid",
    borderColor: 'green',
    borderWidth: 1,
    width: 100,
    height: 100,
    right: 10
    
  },
  imageTwo: {
    borderStyle: "solid",
    borderColor: 'green',
    borderWidth: 1,
    width: 100,
    height: 100,
    left: 10
    
  },
  topMiddle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "yellow",
    height: 50
  },

  


  mainContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "red",
    // width: 300,
    // height: 200,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center'
  },

  phoneContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "green",
    width: 300,
    height: 500,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  containertop: {
    // width: 50,
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "orange",
  },
  containerMiddle: {
    // width: 50,
    height: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    // borderColor: "blue",
    // display: 
  },
 
  
})

export default App;













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
Image


} from 'react-native'




class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      test: [],
      testInput: '',
      try: props.testInput
    }

    this.handleText = this.handleText.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleText(event){
    this.setState({[event.target.name] : event.target.value})
    console.log(this.state.testInput)
  }

  handleClick(event){
    event.preventDefault()
    console.log('here')
    this.setState({ test: this.state.test.concat(this.state.testInput) })
    console.log(this.state.test)
  }

  render(){
    console.log(this.state.try)
    return (
      <View style = {styles.mainContainer}>

        <View style = {styles.phoneContainer}>
          <View style = {styles.containertop}>
            top

          </View>
          
          <View style = {styles.containerMiddle}>
            
            <View style = {styles.topMiddle}>
            
              <Text style = {styles.arrowLeft}>
                arrow
              </Text>
              <Text style = {styles.mls}>
                MLS
              </Text>
              <Text style = {styles.arrowRight}>
                arrow
              </Text>
            </View>

            <View style = {styles.middleImages}>
              <Image style = {styles.imageOne}
                source = {{uri:'http://www.bmysl.org/_uploads/57f6aca5626dcd71524f9628/soccer.jpg'}}
              />
              <View style = {styles.finalScoreContainer}>
                <Text>
                  FINAL
                </Text>
                <Text>
                  2:2
                </Text>
              </View>

              <Image style = {styles.imageTwo}
                source = {{uri:'http://www.bmysl.org/_uploads/57f6aca5626dcd71524f9628/soccer.jpg'}}
              />

              

            </View>
            <View style = {styles.record}>
              
                <View style = {styles.recordOne}>
                  <Text>
                    POR
                  </Text>
                  <Text>
                  6-8-4
                  </Text>
                </View>


              <View style = {styles.buttonContainer}>
               <Button title = 'push me' style= {styles.button}/>
              </View>
              
                <View style = {styles.recordTwo}>
                  <Text>
                    POR
                  </Text>
                  <Text>
                  6-8-4
                  </Text>
                 
                </View>
            
            
              <View>

              </View>

              <View>
              </View>

            </View>

          </View>


        </View>
       
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    // display:'flex',
    // flexDirection: 'row'
    // height: 5,
    position: 'relative',
    left: 28,
    fontSize: 15
  },
  recordOne:{
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-around',
  },
  recordTwo:{
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    left: 50
  },
  record: {
    borderStyle: "solid",
    borderColor: 'pink',
    borderWidth: 1,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center'

  },
  finalScoreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middleImages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderStyle: "solid",
    borderColor: 'purple',
    borderWidth: 1,

  },
  imageOne : {
    borderStyle: "solid",
    borderColor: 'green',
    borderWidth: 1,
    width: 100,
    height: 100,
    right: 10
    
  },
  imageTwo: {
    borderStyle: "solid",
    borderColor: 'green',
    borderWidth: 1,
    width: 100,
    height: 100,
    left: 10
    
  },
  topMiddle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "yellow",
    height: 50
  },

  arrowLeft: {
    
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "red",
    // width: 50,
  },

  arrowRight: {

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "red",
    // width: 50,
  },

  mainContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "red",
    // width: 300,
    // height: 200,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center'
  },

  phoneContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "green",
    width: 300,
    height: 500,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  containertop: {
    // width: 50,
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "orange",
  },
  containerMiddle: {
    // width: 50,
    height: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    // borderColor: "blue",
    // display: 
  },
  mls: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "orange",
    // width: 50
    
  }
  
})

export default App;


