/* index.android.js */

import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';

import CityTempZip from './cityTempZip';

class OutdoorMobile extends Component{
  render(){
    return(
      <View>
        <CityTempZip zip="80223"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('OutdoorMobile', () => OutdoorMobile);
