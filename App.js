import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Navigation from './components/Navigation';

import api from './util/api'

export default class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        quiz: [],
        quizCat: ''
      }
    }

    componentWillMount(){
      api.getQuiz().then((res) => {
        this.setState({
            quiz: res.quiz.results,
            quizCat: res.quiz.results[0].category
        })
      });
    }


  render() {
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
        Quiz: {this.state.quizCat}
      </Text>
      </View>
    );
  }
}
