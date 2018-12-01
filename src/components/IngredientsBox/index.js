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

  startCooking = () => {
    const saucepan = document.getElementById('saucepan');
    if (saucepan) {
      saucepan.classList.add('swing');
    }
  };
  render() {
    return (
      <div>
        <div className="panColumn">
          <div
            id="saucepan"
            className="saucepan"
            onDragOver={e => this.onDragOver(e)}
            onDrop={this.onDrop}
          />
          {this.state.selectedIngredients.length > 0 && (
            <div className="ingredientsList">
              <h4>Selected ingredients</h4>
              <ul>
                {this.state.selectedIngredients.map(ingre => (
                  <li key={ingre.name} style={{ color: ingre.color }}>
                    {ingre.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="ingredientsColumn">
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
            <button
              disabled={this.state.selectedTime === 0}
              className="button button-blue"
              onClick={this.startCooking}
            >
              Start cooking
            </button>
          </div>
        </div>
      </div>
    );
  }
}
