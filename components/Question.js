import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Question extends Component {
  constructor(props) {
    super(props);

    const { correct_answer, incorrect_answers } = this.props.question;
    const answerList = this.shuffle(incorrect_answers.concat([correct_answer]));
    
  }

}
