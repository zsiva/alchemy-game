import React, { Component } from 'react';
import IngredientsBox from './components/IngredientsBox';

const mockIngredients = [{ name: '', img: '' }];

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Alchemy game</h1>
          <IngredientsBox items={mockIngredients} />
        </header>
        <footer>
          <small>
            Vector Illustration by{' '}
            <a target="_blank" rel="noreferrer noopener" href="https://www.vecteezy.com">
              Vecteezy.com
            </a>
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
