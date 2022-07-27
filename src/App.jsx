import React, { Component } from 'react';
import Cards from './components/Card';
import Forms from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
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
      </main>
    );
  }
}

export default App;
