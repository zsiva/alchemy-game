/* @flow */
import React, { Component } from 'react';
import Ingredient, { type IngredientPropType } from './Ingredient';
import TimeBox from '../TimeBox';

export type IngredientsBoxPropType = {
  items: IngredientPropType[],
};

export type IngredientsBoxStateType = {
  ingredients: string[],
  time: number,
};

export default class IngredientsBox extends Component<IngredientsBoxPropType> {
  state = { ingredients: [], time: 0 };

  onTimeSelect = time => {
    console.log(time, this.state);
    this.setState({ time });
  };
  onDragStart = (ev, item) => {
    console.log('dragstart:', item.color);
    ev.dataTransfer.setData('color', item.color);
    ev.dataTransfer.setData('name', item.name);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = ev => {
    let color = ev.dataTransfer.getData('color');
    let name = ev.dataTransfer.getData('name');
    this.setState({
      ingredients: [...this.state.ingredients, { color, name }],
    });
  };

  render() {
    return (
      <div>
        <div className="column">
          <div className="saucepan" onDragOver={e => this.onDragOver(e)} onDrop={this.onDrop} />
          <ul>
            {this.state.ingredients.map(ingre => (
              <li style={{ color: ingre.color }}>{ingre.name}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>
            Choose the ingredients
            <small> (Drop them in the saucepan)</small>
          </h3>
          <div className="boxesGroup">
            {this.props.items.length > 0 &&
              this.props.items.map(item => (
                <Ingredient
                  key={item.id}
                  {...item}
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e, item)}
                  onDragStart={e => this.onDragStart(e, item)}
                />
              ))}
          </div>
          <TimeBox handleTime={this.onTimeSelect} selectedTime={this.state.time} />
          <div className="actions">
            <button className="button button-blue">Start cooking</button>
          </div>
        </div>
      </div>
    );
  }
}
