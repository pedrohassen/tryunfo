import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="cards-container">
        <div className="card-container">
          <h2 data-testid="name-card"><span className="cardTitle">{ cardName }</span></h2>
          <img
            className="image"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <div>
            <p data-testid="description-card">
              <span className="text1-card">
                About:
              </span>
              <span className="text2-card">
                { cardDescription }
              </span>
            </p>
            <p data-testid="attr1-card">
              <span className="text1-card">
                Strength:
                { cardAttr1 }
              </span>
            </p>
            <p data-testid="attr2-card">
              <span className="text1-card">
                Defense:
                { cardAttr2 }
              </span>
            </p>
            <p data-testid="attr3-card">
              <span className="text1-card">
                Chi:
                { cardAttr3 }
              </span>
            </p>
            <p data-testid="rare-card">
              <span className="text1-card">
                Rarity:
              </span>
              <span className="text2-card">
                { cardRare }
              </span>
            </p>
            <div className="text3-card">
              {!cardTrunfo ? '' : <p data-testid="trunfo-card">Super Trunfo</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
