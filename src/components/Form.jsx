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
        <label htmlFor="card-name">
          Card Name:
          <input
            type="text"
            name="cardName"
            id="card-name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-desc">
          Card Description:
          <textarea
            name="cardDescription"
            id="card-desc"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr1">
          Attribute 1:
          <input
            type="number"
            name="cardAttr1"
            id="card-attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr2">
          Attribute 2:
          <input
            type="number"
            name="cardAttr2"
            id="card-attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr3">
          Attribute 3:
          <input
            type="number"
            name="cardAttr3"
            id="card-attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-image">
          Card Image:
          <input
            type="text"
            name="cardImage"
            id="card-image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-rarity">
          Card Rarity:
          <select
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
          <label htmlFor="super-trunfo">
            Super Trunfo:
            <input
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
          type="submit"
          name="submitButton"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
        <p>Busca:</p>
        <label htmlFor="nameFilter">
          Por nome:
          <input
            type="text"
            name="nameFilter"
            id="nameFilter"
            data-testid="name-filter"
            onChange={ nameFilter }
            disabled={ disabled }
          />
        </label>
        <label htmlFor="rareFilter">
          Por raridade:
          <select
            name="rareFilter"
            id="rareFilter"
            data-testid="rare-filter"
            onChange={ rareFilter }
            disabled={ disabled }
          >
            <option value="todas" checked>Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="superFilter">
          Por Super Trunfo:
          <input
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
  nameFilter: PropTypes.func,
  rareFilter: PropTypes.func,
  superFilter: PropTypes.func,
  disabled: PropTypes.bool,
};

Form.defaultProps = {
  hasTrunfo: false,
  nameFilter: '',
  rareFilter: '',
  superFilter: false,
  disabled: false,
};

export default Form;
