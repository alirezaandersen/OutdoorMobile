/* cityTempZip.js */

require('fetch-bluebird');
import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class CityTempZip extends Component{
  constructor(props){
    super(props);
    this.state = {temp:'',city:'',zip:''};
  }

  componentWillReceiveProps(nextProps,nextState){
    console.log('calling componentWillReceiveProps');
    console.log('nextProps=',nextProps);
    console.log('nextState=',nextState);
    this.f(nextProps.zip)
  }

  componentWillUpdate(nextProps,nextState){
    console.log('calling componentWillUpdate',nextProps);
    //console.log('cityTempZip.js','this.props.zip=',this.props.zip);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('calling shouldComponentUpdate');
    console.log('this.props.zip =', this.props.zip);
    console.log('nextProps.zip =', nextProps.zip);
    //return nextProps.zip !== '' && this.props.zip !== nextProps.zip;
    return true;
  }

  componentDidUpdate(){
    console.log('calling componentDidUpdate');
    //this.f();
  }

  componentWillMount(){
    console.log('calling componentWillMount');
  }

  componentDidMount(){
    console.log('calling componentDidMount');
  }
  /* using fetch-bluebird */

  f = function(){
    let self = this;
    var url = "http://outdooradventuretime.herokuapp.com/json/weather/?zip=" + this.props.zip;
    return fetch(url, {})
           .call('json')
           .then( (resJson) => self.setState({temp:resJson.temp,city:resJson.city,zip:resJson.zip}) )
           .catch( (e) => e);
  }.bind(this);


  render(){
    return(
      <View>
        <Text>{this.state.city} | {this.state.temp} | {this.state.zip}</Text>
      </View>
    );
  }
}

CityTempZip.defaultProps = {zip: ''};
