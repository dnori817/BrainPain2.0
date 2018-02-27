import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import Navigation from './components/Navigation';

import Question from './components/Question';

import api from './util/api'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();





export default class App extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        isLoading: false,
        error: false,
        quiz: [],
        currentQuestion: 0,
        score: 0,
        canProceed: false,
      }
    }

    componentWillMount(){
      api.getQuiz().then((res) => {
        this.setState({
            quiz: res.results,
            question: res.results[1].question,
            corrAns:res.results[1].correct_answer
        })
      });
    }


  render() {
    console.log("Quiz: ", this.state.quiz);
    console.log(entities.decode(this.state.question));


    return (
      <View>

        <Navigation/>

        <Text >
          Question: { entities.decode(this.state.question) }

        </Text>



        <Button
          onPress={ () => alert(entities.decode(this.state.corrAns)) }
          title="ANSWER"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />




      </View>
    );
  }
}
