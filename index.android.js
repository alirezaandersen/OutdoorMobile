/* index.android.js */

import React, { Component } from 'react';
import {AppRegistry, View, TextInput, Alert} from 'react-native';

import CityTempZip from './cityTempZip';

class OutdoorMobile extends Component{
  constructor(props){
    super(props)
    this.state =  {zip:'Enter Zipcode'}
  }
  isValidZip(input){
    return /^\d{5}$/.test(input);
  }
  handleChange(event){
    let inputText = event.nativeEvent.text;
    if(this.isValidZip(inputText)){
      this.setState({zip:inputText});
    }
    else{
      Alert.alert('Invalid Zipcode',inputText);
    }
    console.log(event.nativeEvent.text);
  }

  render(){
    console.log('index.andrid.js','calling render()');
    let textInputStyle = {height: 40};
    return(
      <View>
        <TextInput style={textInputStyle} placeholder="Enter a zipcode" onSubmitEditing={this.handleChange.bind(this)}></TextInput>
        <CityTempZip zip={this.state.zip}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('OutdoorMobile', () => OutdoorMobile);
