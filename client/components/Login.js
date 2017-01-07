import FBSDK from 'react-native-fbsdk'
import React, { Component } from 'react'
import {
  View  
} from 'react-native'
import axios from 'axios'

const {
  LoginButton,
  AccessToken
} = FBSDK

export default class FBlogin extends Component {
  constructor(props) {
    super(props)

    this.finishedLogin = this.finishedLogin.bind(this) //***dc
  }

  finishedLogin(err, res) {
    if (err) {
      console.log('ERROR Facebook login failed: ', err)
    } else if (res.isCancelled) {
      console.log("Facebook login cancelled by user")
    } else {
      console.log("Facebook login was successful with permissions: ", res.grantedPermissions)

      AccessToken.getCurrentAccesToken()
        .then(data => {
          axios.post('/login/auth', //Will likely need to revisit
            {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: {
                fbAccessToken: data.accessToken
              }
            }
          ) 
        })
        .then(response => response.json())
        .then(data => this.props.setUser(data)) //Will likely need to revisit
        .catch(err => console.log)
    }
  }

  finishedLogout(err, res) {
    this.props.logOut() //Will likely need to revisit
  }

  render() {
    return (
      <View>
        <LoginButton
        readPermissions={["public_profile emial"]}
        onLoginFinished={this.finishedLogin}
        onLogoutFinished={this.finishedLogout}/>
      </View>
    )
  }

}

  //TO DO: under error console.log, create custom pop ups for errors instead of alerts.
  //
  //  test granted permissions find out how to edit 'LoginButton'