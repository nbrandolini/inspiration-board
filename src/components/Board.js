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
      this.setState({
        error: error.message
      });
    });
  };

  renderCardList =() => {
    const cardsList = this.state.cards.map((item, index) => {
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

  renderError = () => {
    if (this.state.error) {
      return (
        <p>{this.state.error}</p>
      );
    }
  };

  addCard = (card) => {
    const cardsList = this.state.cards;
    const newCard = { card: card };

    cardsList.push(newCard);
    this.setState({
      cardsList,
    });
  };

  render() {

    return (
      <section className="board">
      {this.renderCardList()}
      {this.renderError()}
        <NewCardForm addCardCallback={this.addCard} />
      </section>
    );}
}

Board.propTypes = {

};

export default Board;
