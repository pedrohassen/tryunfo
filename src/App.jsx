import React, { Component } from 'react';
import Cards from './components/Card';
import Forms from './components/Form';
import './css/App.css';

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
      nameFilter: '',
      rareFilter: '',
      superFilter: false,
      disabled: false,
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
    this.setState({ nameFilter: target.value });
  }

  rareFilter = ({ target }) => {
    if (target.value === 'todas') return this.setState({ rareFilter: '' });
    if (target.value === 'normal') return this.setState({ rareFilter: 'normal' });
    if (target.value === 'raro') return this.setState({ rareFilter: 'raro' });
    if (target.value === 'muito raro') return this.setState({ rareFilter: 'muito raro' });
  }

  superFilter = ({ target }) => {
    if (!target.checked) {
      return this.setState({
        nameFilter: '',
        rareFilter: '',
        superFilter: target.checked,
        disabled: false,
      });
    }
    this.setState({
      nameFilter: '',
      rareFilter: '',
      superFilter: target.checked,
      disabled: true,
    });
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
      nameFilter,
      rareFilter,
      superFilter,
      disabled,
    } = this.state;
    return (
      <main className="main-container">
        <h1 className="title">Super-Tryunfo</h1>
        <div className="divide-screen">
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
            rareFilter={ this.rareFilter }
            superFilter={ this.superFilter }
            disabled={ disabled }
          />
          <div className="divide-screen-two">
            <div>
              <h2 className="card-creation">Card Creation:</h2>
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
            </div>
            {cards
              .filter((card) => card.cardTrunfo === superFilter || card.cardTrunfo)
              .filter((card) => card.cardRare
                .startsWith(rareFilter))
              .filter((card) => card.cardName
                .toLowerCase()
                .includes(nameFilter.toLowerCase()))
              .map((card) => (
                <div className="divide-screen" key={ card.cardName }>
                  <div className="generated-cards">
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
                    <div className="delete-card">
                      <button
                        className="delete-card"
                        id={ card.cardName }
                        type="submit"
                        data-testid="delete-button"
                        onClick={ this.deleteCard }
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
