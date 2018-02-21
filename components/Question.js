import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Question extends Component {
  constructor(props) {
    super(props);

    const { correct_answer, incorrect_answers } = this.props.question;
    const answerList = this.shuffle(incorrect_answers.concat([correct_answer]));

    this.state = {
      hasAnswered: false,
      isCorrect: false,
      answerSelected: '',
      answerList,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question !== nextProps.question) {
      const { correct_answer, incorrect_answers } =
      nextProps.question;
      const answerList =
      this.shuffle(incorrect_answers.concat([correct_answer]));

      this.setState({
        hasAnswered: false,
        isCorrect: false,
        answerSelected: '',
        answerList,
      });
    }
  }

  render() {
    const { question } = this.props.question;

    return (
      <View>
        <Text>

        </Text>
      </View>
    )
  }

  renderAnswer = (answer)
}
