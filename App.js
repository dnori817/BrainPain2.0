import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Navigation from './components/Navigation';

import api from './util/api'

export default class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        quiz: [],
        // quizCat: ''
      }
    }

    componentWillMount(){
      api.getQuiz().then((res) => {
        this.setState({
            quiz: res.results,
            question: res.results[0].question
        })
      });
    }


  render() {
    console.log("Quiz: ", this.state.quiz);
    return (
      <View>

        <Navigation/>


        <Button
          onPress={ () => alert('YOU WIN!') }
          title="NEW GAME"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      <Text>
        Question: {this.state.question}
      </Text>
      </View>
    );
  }
}
