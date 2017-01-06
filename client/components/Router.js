import React, { Component } from 'react'
import { Navigator, View } from 'react-native'

export default class Router extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
  }

  _renderScene (route, navigator) {
    if (route.name === 'SplashScreen') {
      return (
        <View>
        </View>
      )
    } else if (route.name === 'Login') {
      return (
        <View>
        </View>
      )
    } else if (route.name === 'Lobby') {
      return (
        <View>
        </View>
      )
    } else if (route.name === 'Story') {
      return (
        <View>
        </View>
      )
    } else if (route.name === 'Profile') {
      return (
        <View>
        </View>
      )
    }
  }

  _configureScene (route, routeStack) {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render () {
    return (
      <Navigator 
        initialRoute={{name: 'SplashScreen'}}
        renderScene={this._renderScene}
        _configureScene={this._configureScene}
      />
    )
  }
}