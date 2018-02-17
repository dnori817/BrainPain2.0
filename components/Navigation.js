import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Navigation extends Component {

  render() {
    return (
      <View style={styles.navigation}>
        <Text>
          BrainPain
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
  },
});
