import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';



class Card extends Component {
  renderEmoji = () => {
    if(this.props.emoji) {
      return (
        <p>{emoji.getUnicode(this.props.emoji)}</p>
      );
    }
  };
  render() {
    return (
      <div className="card">
        <p> {this.props.text}</p>
        <p>{this.renderEmoji()}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji:PropTypes.string.isRequired,
};

export default Card;
