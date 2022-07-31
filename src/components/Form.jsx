import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      nameFilter,
      rareFilter,
      superFilter,
      disabled,
    } = this.props;
    return (
      <form className="forms-container">
        <label className="forms-container" htmlFor="card-name">
          Card Name:
          <input
            className="type-input"
            type="text"
            name="cardName"
            id="card-name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label className="forms-container" htmlFor="card-desc">
          Card Description:
          <textarea
            className="type-textarea"
            name="cardDescription"
            id="card-desc"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="forms-container" htmlFor="card-attr1">
          Attribute 1:
          <input
            className="type-attr"
            type="number"
            name="cardAttr1"
            id="card-attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label className="forms-container" htmlFor="card-attr2">
          Attribute 2:
          <input
            className="type-attr"
            type="number"
            name="cardAttr2"
            id="card-attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label className="forms-container" htmlFor="card-attr3">
          Attribute 3:
          <input
            className="type-attr"
            type="number"
            name="cardAttr3"
            id="card-attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label className="forms-container" htmlFor="card-image">
          Card Image:
          <input
            className="type-image"
            type="text"
            name="cardImage"
            id="card-image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label className="forms-container" htmlFor="card-rarity">
          Card Rarity:
          <select
            className="type-rarity"
            name="cardRare"
            id="card-rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
          <label className="label-strunfo" htmlFor="super-trunfo">
            Super Trunfo:
            <input
              className="checkbox"
              type="checkbox"
              name="cardTrunfo"
              id="super-trunfo"
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />
          </label>
        )}
        <button
          className="save-btn"
          type="button"
          name="submitButton"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Save
        </button>
        <p className="forms-container">Search:</p>
        <label className="forms-container" htmlFor="nameFilter">
          By name:
          <input
            className="type-input"
            type="text"
            name="nameFilter"
            id="nameFilter"
            data-testid="name-filter"
            onChange={ nameFilter }
            disabled={ disabled }
          />
        </label>
        <label className="forms-container" htmlFor="rareFilter">
          By rarity:
          <select
            className="type-rarity"
            name="rareFilter"
            id="rareFilter"
            data-testid="rare-filter"
            onChange={ rareFilter }
            disabled={ disabled }
          >
            <option value="todas" checked>All</option>
            <option value="normal">Normal</option>
            <option value="raro">Rare</option>
            <option value="muito raro">Very Rare</option>
          </select>
        </label>
        <label className="label-strunfo" htmlFor="superFilter">
          By Super Trunfo:
          <input
            className="checkbox"
            type="checkbox"
            name="superFilter"
            id="superFilter"
            data-testid="trunfo-filter"
            onChange={ superFilter }
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  nameFilter: PropTypes.func.isRequired,
  rareFilter: PropTypes.func.isRequired,
  superFilter: PropTypes.func,
  disabled: PropTypes.bool,
};

Form.defaultProps = {
  hasTrunfo: false,
  superFilter: false,
  disabled: false,
};

export default Form;
