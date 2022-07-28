import React, { Component } from 'react';
import Cards from './components/Card';
import Forms from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      filteredCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateSaveButton);
  }

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const attrSum = 210;
    const maxAttr = 90;
    if ([cardName.length, cardDescription.length, cardImage.length]
      .some((val) => val === 0)
      || (+cardAttr1 + +cardAttr2 + +cardAttr3)
      > attrSum
      || [+cardAttr1, +cardAttr2, +cardAttr3]
        .some((val) => val > maxAttr || val < 0)) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    } this.setState({
      isSaveButtonDisabled: false,
    });
  }

  saveCard = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      cards: [...state.cards, state],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), this.checkTrunfo);
  }

  checkTrunfo = () => {
    const { cards } = this.state;
    const hasTrunfo = cards.some(({ cardTrunfo }) => cardTrunfo);
    this.setState({ hasTrunfo });
  }

  deleteCard = (e) => {
    e.preventDefault();
    const { cards } = this.state;
    const filter = cards.filter((card) => card.cardName !== e.target.id);
    const cardToRemove = e.target.parentNode;
    this.setState({ cards: filter }, () => {
      cardToRemove.remove();
      this.checkTrunfo();
    });
  }

  nameFilter = ({ target }) => {
    const { cards } = this.state;
    const searchFilter = cards.filter((card) => card.cardName
      .includes(target.value));
    console.log(searchFilter);
    if (searchFilter.length) return this.setState({ filteredCards: searchFilter });
    this.setState({ filteredCards: [''] });
  }

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
      cards,
      filteredCards,
    } = this.state;
    return (
      <main>
        <h1>Super-Tryunfo</h1>
        <Forms
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.saveCard }
          nameFilter={ this.nameFilter }
        />
        <Cards
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {filteredCards.length ? filteredCards.map((card) => (
          <div key={ card.cardName }>
            <Cards
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              id={ card.cardName }
              type="submit"
              data-testid="delete-button"
              onClick={ this.deleteCard }
            >
              Excluir
            </button>
          </div>
        ))
          : cards.map((card) => (
            <div key={ card.cardName }>
              <Cards
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                id={ card.cardName }
                type="submit"
                data-testid="delete-button"
                onClick={ this.deleteCard }
              >
                Excluir
              </button>
            </div>
          ))}
      </main>
    );
  }
}

export default App;
