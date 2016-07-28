/* cityTempZip.js */
/*
 * Creates <CityTempZip zip="80123"/> component
 *
 */

import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class CityTempZip extends Component{
  constructor(props){
    super(props);
    this.state = {temp:'',city:'',zip:''};
    this.f();
  }

  f = function(){
    let self = this;
    console.log("inside f()");
    var url = "http://outdooradventuretime.herokuapp.com/json/weather/?zip=" + this.props.zip;
    return fetch(url, {})
      .then((res) => res.json())
      .then((resJson) => self.setState({temp:resJson.temp,city:resJson.city,zip:resJson.zip}))
      .catch((e) => e);
  }.bind(this);

  render(){
    return(
      <View>
        <Text>{this.state.city} | {this.state.temp} | {this.state.zip}</Text>
      </View>
    );
  }
}

CityTempZip.defaultProps = {zip: 80123};
