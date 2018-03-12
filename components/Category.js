import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

export default class Category extends React.Component {
  render() {
    let data = [
      {
          "id": 9,
          "value": "General Knowledge",
        },
        {
          "id": 10,
          "value": "Books",
        },
        {
          "id": 11,
          "value": "Film",
        },
        {
          "id": 12,
          "value": "Music",
        },
        {
          "id": 13,
          "value": "Musicals & Theatre",
        },
        {
          "id": 14,
          "value": "Television",
        },
        {
          "id": 15,
          "value": "Video Games",
        },
        {
          "id": 16,
          "value": "Board Games",
        },
        {
          "id": 17,
          "value": "Science & Nature",
        },
        {
          "id": 18,
          "value": "Computers",
        },
        {
          "id": 19,
          "value": "Mathematics",
        },
        {
          "id": 20,
          "value": "Mythology",
        },
        {
          "id": 21,
          "value": "Sports",
        },
        {
          "id": 22,
          "value": "Geography",
        },
        {
          "id": 23,
          "value": "History",
        },
        {
          "id": 24,
          "value": "Politics",
        },
        {
          "id": 25,
          "value": "Art",
        },
        {
          "id": 26,
          "value": "Celebrities",
        },
        {
          "id": 27,
          "value": "Animals",
        },
        {
          "id": 28,
          "value": "Vehicles",
        },
        {
          "id": 29,
          "value": "Comics",
        },
        {
          "id": 30,
          "value": "Science: Gadgets",
        },
        {
          "id": 31,
          "value": "Japanese Anime & Manga",
        },
        {
          "id": 32,
          "value": "Cartoon & Animations",
        },
    ];

    return (
      <Dropdown
        label='Category'
        data={data}
      />
    );
  }
}
