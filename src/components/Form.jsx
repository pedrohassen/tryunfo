import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Form extends Component {
  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1, cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   hasTrunfo,
    //   isSaveButtonDisabled,
    //   onInputChange,
    //   onSaveButtonClick
    // } = this.props;
    return (
      <form>
        <label htmlFor="card-name">
          Card Name:
          <input type="text" name="card-name" id="card-name" data-testid="name-input" />
        </label>
        <label htmlFor="card-desc">
          Card Description:
          <textarea
            name="card-desc"
            id="card-desc"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="card-attr1">
          Attribute 1:
          <input
            type="number"
            name="card-attr1"
            id="card-attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="card-attr2">
          Attribute 2:
          <input
            type="number"
            name="card-attr2"
            id="card-attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="card-attr3">
          Attribute 3:
          <input
            type="number"
            name="card-attr3"
            id="card-attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="card-image">
          Card Image:
          <input
            type="text"
            name="card-image"
            id="card-image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="card-rarity">
          Card Rarity:
          <select name="card-rarity" id="card-rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          Super-Trunfo?
          <input
            type="checkbox"
            name="super-trunfo"
            id="super-trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   cardTrunfo: PropTypes.bool,
//   hasTrunfo: PropTypes.bool,
//   isSaveButtonDisabled: PropTypes.bool,
//   onInputChange: PropTypes.
// };

export default Form;
