import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    const BOARD_URL =  `https://inspiration-board.herokuapp.com/boards/Nicoleta/cards`;

    axios.get(BOARD_URL)
    .then((response) => {
      console.log(response.data);
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    });
  };


  renderCardList =() => {
    // console.log(cards)
    const cardsList = this.state.cards.map((item, index) => {
      // console.log(item)
      return (
        <Card
        key= {index}
        text= {item.card.text}
        emoji= {item.card.emoji}
        />
      );
    });
    return cardsList;
  };

  render() {

    return (
      <section className="board">
      {this.renderCardList()}
      <NewCardForm />
      </section>
    );}
}

Board.propTypes = {

};

export default Board;
