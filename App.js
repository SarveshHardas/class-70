import React, {Component} from 'react';
import BottomTabNaviagtor from './component/bottmTabNavigator';
import {Rajdhani_600SemiBold} from '@expo-google-fonts/rajdhani';
import * as Font from 'expo-font';

export default class App extends Component {

  constructor(){
    super()
    this.state={
      fontsLoaded:false
    }
  }

  componentDidMount(){
    this.loadFonts()
  }

  async loadFonts (){
    await Font.loadAsync({
      Rajdhani_600SemiBold:Rajdhani_600SemiBold,
    })
    this.setState({
      fontsLoaded:true
    })
  }


 render(){
      const {fontsLoaded} = this.state();

      if(fontsLoaded ===true){
        return(
        <BottomTabNaviagtor  />
        )
      }
      return null
}
}


