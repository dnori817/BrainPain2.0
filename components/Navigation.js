import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
    height: 70,
  },

  title: {
    fontSize: 30,

  }
});
