import React, { Component } from 'react';
import Cards from './components/Card';
import Forms from './components/Form';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Super-Tryunfo</h1>
        <Forms />
        <Cards />
      </main>
    );
  }
}

export default App;
