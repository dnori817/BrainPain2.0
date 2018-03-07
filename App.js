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
      quiz: [],
      currentQuestion: 0,
      categories: [
        {
          "id": 9,
          "name": "General Knowledge",
        },
        {
          "id": 10,
          "name": "Books",
        },
        {
          "id": 11,
          "name": "Film",
        },
        {
          "id": 12,
          "name": "Music",
        },
        {
          "id": 13,
          "name": "Musicals & Theatre",
        },
        {
          "id": 14,
          "name": "Television",
        },
        {
          "id": 15,
          "name": "Video Games",
        },
        {
          "id": 16,
          "name": "Board Games",
        },
        {
          "id": 17,
          "name": "Science & Nature",
        },
        {
          "id": 18,
          "name": "Computers",
        },
        {
          "id": 19,
          "name": "Mathematics",
        },
        {
          "id": 20,
          "name": "Mythology",
        },
        {
          "id": 21,
          "name": "Sports",
        },
        {
          "id": 22,
          "name": "Geography",
        },
        {
          "id": 23,
          "name": "History",
        },
        {
          "id": 24,
          "name": "Politics",
        },
        {
          "id": 25,
          "name": "Art",
        },
        {
          "id": 26,
          "name": "Celebrities",
        },
        {
          "id": 27,
          "name": "Animals",
        },
        {
          "id": 28,
          "name": "Vehicles",
        },
        {
          "id": 29,
          "name": "Comics",
        },
        {
          "id": 30,
          "name": "Science: Gadgets",
        },
        {
          "id": 31,
          "name": "Japanese Anime & Manga",
        },
        {
          "id": 32,
          "name": "Cartoon & Animations",
        },
      ],

    }
  }


  componentDidMount(){
    const category = 10;
    api.getQuiz(category).then((res) => {
      this.setState({
        quiz: res.results,
        question: res.results[this.state.currentQuestion].question,
        corrAns:res.results[this.state.currentQuestion].correct_answer,
        wrongAns:res.results[this.state.currentQuestion].incorrect_answers[0]
      })
    });
  }


  _nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });

  };



  render() {
    console.log(this.state.quiz);
    console.log(entities.decode(this.state.question));


    return (
      <View>

        <Navigation/>

        <Text >
          Question: { entities.decode(this.state.question) }
        </Text>
        <Text>
          A: { entities.decode(this.state.corrAns) }
        </Text>
        <Text>
          B: { entities.decode(this.state.wrongAns) }
        </Text>
        <Text>
          { this.state.currentQuestion }
        </Text>





        <Button
          onPress={ () => alert(entities.decode(this.state.corrAns)) }
          title="ANSWER"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />




        <Button
          onPress={ this._nextQuestion }
          title="NEXT"
          color="#241284"
          accessibilityLabel="Learn more about this purple button"
        />


      </View>
    );
  }


}
