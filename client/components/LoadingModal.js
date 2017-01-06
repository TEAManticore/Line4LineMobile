import React, { Component } from 'react'
import { Modal, View, Text, ActivityIndicator, Alert } from 'react-native'
import styles from '../styles'

export default class LoadingModal extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.props.animating}
      >
        <View style={{backgroundColor: '#000',flex: 1, opacity: this.props.opacity}}>
          <ActivityIndicator
            animating={this.props.animating}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        </View>
      </Modal>
    )
  }
}