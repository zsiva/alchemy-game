/* @flow */
import React, { Component } from 'react';
import Ingredient, { type IngredientPropType } from './Ingredient';
import TimeBox from '../TimeBox';

export type IngredientsBoxPropType = {
  ingredients: IngredientPropType[],
};

type SelectedIngredientType = { color: string, name: string };

export type IngredientsBoxStateType = {
  selectedIngredients: SelectedIngredientType[],
  selectedTime: number,
};

export default class IngredientsBox extends Component<
  IngredientsBoxPropType,
  IngredientsBoxStateType,
> {
  state = { selectedIngredients: [], selectedTime: 0 };

  onTimeSelect = (selectedTime: number) => {
    this.setState({ selectedTime });
  };

  onDragStart = (ev: SyntheticDragEvent<*>, item: IngredientPropType) => {
    console.log('dragstart:', item.color);
    ev.dataTransfer.setData('color', item.color);
    ev.dataTransfer.setData('name', item.name);
  };

  onDragOver = (ev: SyntheticDragEvent<*>) => {
    ev.preventDefault();
  };

  onDrop = (ev: SyntheticDragEvent<*>) => {
    let color = ev.dataTransfer.getData('color');
    let name = ev.dataTransfer.getData('name');
    this.setState({
      selectedIngredients: [...this.state.selectedIngredients, { color, name }],
    });
  };

  render() {
    return (
      <div>
        <div className="column">
          <div className="saucepan" onDragOver={e => this.onDragOver(e)} onDrop={this.onDrop} />
          <ul>
            {this.state.selectedIngredients.map(ingre => (
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
            {this.props.ingredients.length > 0 &&
              this.props.ingredients.map(item => (
                <Ingredient
                  key={item.id}
                  {...item}
                  onDragOver={e => this.onDragOver(e)}
                  onDrop={e => this.onDrop(e)}
                  onDragStart={e => this.onDragStart(e, item)}
                />
              ))}
          </div>
          <TimeBox handleTime={this.onTimeSelect} selectedTime={this.state.selectedTime} />
          <div className="actions">
            <button className="button button-blue">Start cooking</button>
          </div>
        </div>
      </div>
    );
  }
}
