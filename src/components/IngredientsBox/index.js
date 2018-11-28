/* @flow */
import React from 'react';
import Ingredient, { type IngredientPropType } from './Ingredient';

export type IngredientsBoxPropType = {
  items: IngredientPropType[],
};

export default function IngredientsBox(props: IngredientsBoxPropType) {
  return (
    <div>
      {props.items.map(item => (
        <Ingredient {...item} />
      ))}
    </div>
  );
}
