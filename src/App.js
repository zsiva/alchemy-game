import React, { Component } from 'react';
import IngredientsBox from './components/IngredientsBox';
import './styles.css';

const mockIngredients = [
  { id: '1', name: 'tomato', color: 'red' },
  { id: '2', name: 'carrot', color: 'orange' },
  { id: '3', name: 'pepper', color: '#9c0000' },
  { id: '4', name: 'broccoli', color: '#04e904' },
  { id: '5', name: 'parsnip', color: '#f9f1bb' },
  { id: '6', name: 'chili', color: '#b73019' },
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Make a soup!</h1>
        </header>
        <IngredientsBox ingredients={mockIngredients} />
        <footer>
          <small>
            <a href="https://www.freepik.com/free-vector/various-fresh-organic-vegetables-vector-pack_3428185.htm">
              Designed by Rawpixel.com
            </a>
            <br />
            Vector Illustration by{' '}
            <a rel="nofollow" href="https://www.Vecteezy.com">
              vecteezy.com
            </a>
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
