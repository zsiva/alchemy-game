import React, { Component } from 'react';
import IngredientsBox from './components/IngredientsBox';
import BoxesGroup from './components/IngredientsBox/boxes';
import './styles.css';

const mockIngredients = [
  { id: '1', name: 'tomato', img: '', color: 'red' },
  { id: '2', name: 'carrot', img: '', color: 'orange' },
  { id: '3', name: 'pepper', img: '', color: '#9c0000' },
  { id: '4', name: 'broccoli', img: '', color: '#04e904' },
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
