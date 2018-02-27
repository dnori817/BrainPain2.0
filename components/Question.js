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
    console.log(this.props.question)
    return (
      <View>
        <Text>
          {this.state.answerList.map(this.renderAnswer)}
        </Text>
      </View>
    )
  }

  renderAnswer = (answer) => {
    const { hasAnswered, isCorrect, answerSelected } = this.state;

    if (!hasAnswered) {
      return (
        <View>
        </View>
      );
    }


    return (
      <View>
      </View>
    );
  }

  selectAnswer = (selected) => {
    let isCorrect = true;
    if (selected === this.props.question.correct_answer) {
      this.setState({
        hasAnswered: true,
        isCorrect: true,
        answerSelected: selected
      });
    } else {
      isCorrect = false;
      this.setState({
        hasAnswered: true,
        isCorrect: false,
        answerSelected: selected
      });
    }
    this.props.answerSelected(isCorrect);
  }

  // Fisher-Yates shuffle algorithm
	shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
}
