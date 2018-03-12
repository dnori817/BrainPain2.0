import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Category from './Category';


export default class Navigation extends Component {

  render() {
    return (
      <View style={styles.navigation}>
        <Text style={styles.title}>
          BrainPain
        </Text>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
  },

  title: {
    fontSize: 80,

  }
});
