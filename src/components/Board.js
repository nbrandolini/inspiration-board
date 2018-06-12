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
      console.log('Component did mount was called');

      axios.get('https://inspiration-board.herokuapp.com/boards/Nicoleta/cards')
        .then( (response) => {
          console.log( response.data );
          this.setState({
            cards: response.data
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
  renderCards = () => {
    const cards = this.state.cards.map((card, index) => {
           return (
          <Card
            key= {index}
            text= {card.card.text}
            emoji= {card.card.emoji}
          />
        );
      } )
      console.log(cards);
      return cards;
}
render() {
    return (
      <div className="board">

        {this.renderCards()}
      </div>
    );
  }

}

Board.propTypes = {

};

export default Board;
